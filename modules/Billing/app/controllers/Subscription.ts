// import type { HttpContext } from '@adonisjs/core/http'
// import { patchProfile } from '#modules/Profile/app/validators/profile'
// import { ProfileConfig } from '#modules/config'
// import router from '@adonisjs/core/services/router'
import User from '#models/user'
import { BillingConfig } from '#modules/config'
import ModuleController from '#modules/index'
import env from '#start/env'
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
    const apiKey = env.get('LEMONSQUEEZY_API_KEY')
    const url = 'https://api.lemonsqueezy.com/v1/checkouts'
    const data = {
      data: { ...body },
    }
    // console.log(JSON.stringify(data))
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${apiKey}`,
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
    delete product_options.id
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

  //  generate checkout url
  // createSubscription
  // updateSubscription
  // subscriptionPayment
  //    subscriptionPaymentFailed
  //    subscripitonCanceleled
  //  subscriptionExpired
}
