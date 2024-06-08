// import type { HttpContext } from '@adonisjs/core/http'
// import { patchProfile } from '#modules/Profile/app/validators/profile'
// import { ProfileConfig } from '#modules/config'
// import router from '@adonisjs/core/services/router'
import User from '#models/user'
import UserSubscription from '#models/user_subscription'
import { BillingConfig } from '#modules/config'
import ModuleController from '#modules/index'
import env from '#start/env'

import { HttpContext } from '@adonisjs/core/http'

import { DateTime } from 'luxon'

interface CheckoutData {
  email?: string
  name?: string
  billing_address?: {
    country: string
    zip: string
  }
  tax_number?: string
  discount_code?: string
  test_mode?: boolean
  custom: {
    userId: string
  }
}

interface ProductOptions {
  id?: string
  receipt_thank_you_note?: string
  receipt_link_url?: string
  receipt_button_text?: string
  enabled_variants?: string[]
}

interface CheckoutUrlOptions {
  type: 'checkouts'
  test_mode: boolean
  attributes: {
    product_options?: ProductOptions
    checkout_data?: CheckoutData
    expires_at?: string
    preview: boolean
  }
  relationships: {
    store: {
      data: {
        type: 'stores'
        id: string
      }
    }
    variant?: {
      data: {
        type: 'variants'
        id: string
      }
    }
  }
}

export default class SubscriptionController extends ModuleController {
  protected readonly apiKey = env.get('LEMONSQUEEZY_API_KEY')
  readonly url = 'https://api.lemonsqueezy.com/v1'

  private checkUrlOptions: CheckoutUrlOptions = {
    type: 'checkouts',
    attributes: {
      preview: env.get('NODE_ENV') === 'development',
    },
    test_mode: env.get('NODE_ENV') === 'development',
    relationships: {
      store: {
        data: {
          type: 'stores',
          id: BillingConfig.storeId,
        },
      },
    },
  }

  private async fetchCheckoutUrl(body: CheckoutUrlOptions): Promise<any> {
    const data = {
      data: { ...body },
    }
    // console.log(JSON.stringify(data))
    return await fetch(this.url + '/checkouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error)
        return error
      })
  }

  private getProduct(id: string) {
    return BillingConfig.products.find((item) => item.id == id) as ProductOptions
  }

  private genExpiryDate() {
    return DateTime.now().plus({ minutes: 30 }).toISO()
  }

  public async generateCheckoutUrl({ user, pid }: { user: User; pid: string }) {
    let product_options = this.getProduct(pid)

    if (!product_options) {
      return new Error('Product ID does not exist')
    }

    let urlOptions: CheckoutUrlOptions = {
      ...this.checkUrlOptions,
      attributes: {
        ...this.checkUrlOptions.attributes,
        product_options: {},
        checkout_data: {
          custom: {
            userId: String(user.id),
          },
          email: user.email,
        },
        expires_at: this.genExpiryDate(),
      },
      relationships: {
        ...this.checkUrlOptions.relationships,
        variant: {
          data: {
            type: 'variants',
            id: pid,
          },
        },
      },
    }

    // console.log(urlOptions)
    return await this.fetchCheckoutUrl(urlOptions)
  }

  async getCheckoutUrl({ auth, request, response }: HttpContext) {
    const user = auth.user!
    try {
      let checkout = await this.generateCheckoutUrl({
        user,
        pid: request.qs().pid,
      })
      this.emitEvent('Billing:getCheckoutUrl', 'event', checkout)

      let url = checkout.data.attributes.url

      return response.header('HX-Redirect', url)
    } catch (error) {
      this.emitEvent('Billing:getCheckoutUrl', 'error', error)
      console.log(error)
      let title = 'Sorry something went wrong during checkout',
        desc = 'This matter has been reported and we will contact you within 48 hours.'
      return response.header('HX-Redirect', `/505?title=${title}&desc=${desc}`)
    }
  }

  async hookSubscription({ request, response }: HttpContext) {
    const signature = request.header('X-Signature')
    if (!signature) {
      return response.status(200).send('ok')
    }

    if (signature !== env.get('WEBHOOK_SIGNATURE')) {
      return response.status(200).send('ok')
    }

    const { data, meta } = request.body()
    const {
      customer_id,
      order_id,
      order_item_id,
      product_id,
      variant_id,
      status,
      trail_ends_at,
      renews_at,
      ends_at,
      card_brand,
      card_last_four,
      urls,
    } = data.attributes

    await UserSubscription.updateOrCreate(
      {
        subscriptionId: data.id,
      },
      {
        userId: meta.custom_data.userId,
        customerId: customer_id,
        orderId: order_id,
        orderItemId: order_item_id,
        productId: product_id,
        variantId: variant_id,
        status,
        trailEndsAt: trail_ends_at,
        renewsAt: renews_at,
        endsAt: ends_at,
        cardBrand: card_brand,
        cardLastFour: card_last_four,
        updatePaymentMethod: urls.update_payment_method,
      }
    )

    return response.status(200).send('ok')
  }

  async cancelSubscription({ auth, session, response }: HttpContext) {
    const { id } = auth.user!
    const deleteResponse = await fetch(this.url + '/subscriptions' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error)
        return error
      })

    if (deleteResponse == typeof Error) {
      this.emitEvent('Billing:cancelSubscription', 'error', 'API Called failed')
      this.showFlashMessage(
        session,
        'Billing:cancelSubscription',
        'error',
        'UserManualSubscriptionCancelationFailed'
      )
    } else {
      this.emitEvent('Billing:cancelSubscription', 'event', deleteResponse)
      this.showFlashMessage(
        session,
        'Billing:cancelSubscription',
        'success',
        'UserManualSubscriptionCancelled'
      )
    }

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
  }
}
