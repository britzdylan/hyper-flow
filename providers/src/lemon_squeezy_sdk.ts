import { RestClient } from './rest_provider.js'

interface ResourceObjectStructure<T> {
  type: string
  id: number
  attributes: T
  relationships?: {}
  links?: {}
  meta?: {}
}

interface ResourceOptions {
  related?: string[]
  filter?: {
    [key: string]: any
  }
  paginate?: {
    size: number | null
    number: number | null
  }
  headers?: {
    [key: string]: any
  }
}

interface ResourceData {
  type: string
  data: {
    [key: string]: any
  }
  relationships?: {
    [key: string]: any
  }
  id?: string
}

export default class LemonSDK {
  readonly url = 'https://api.lemonsqueezy.com/v1'
  private RestClient: RestClient | null = null

  private headers = (key: string) => {
    return {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'Authorization': `Bearer ${key}`,
    }
  }

  constructor(apiKey: string) {
    this.RestClient = new RestClient(this.url, { headers: this.headers(apiKey) })
  }

  private async getResource<T>(resource: string, options: ResourceOptions = {}) {
    const { related, filter, paginate, headers } = options

    const getRelated = () => (related ? `include=${related.join(',')}` : '')

    const getFilters = () => {
      let finalFilter = ''
      if (filter) {
        Object.keys(filter).forEach((item) => {
          finalFilter = `${finalFilter}&filter[${item}]=${filter[item]}`
        })
      }
      return finalFilter
    }

    const getPaginate = () => {
      if (paginate && paginate.size && paginate.number) {
        return `&page[size]=${paginate.size}&page[number]=${paginate.number}`
      } else {
        return ''
      }
    }

    const finalUrl = `${resource}?${getRelated()}${getFilters()}${getPaginate()}`.replace('?&', '?')
    console.log('finalUrl', finalUrl)
    try {
      const response = await this.RestClient!.get<ResourceObjectStructure<T>>(finalUrl, headers)
      return response
    } catch (error) {
      console.error(`Error fetching resource ${resource}:`, error)
      throw new Error(`Error fetching resource ${resource}`)
    }
  }

  private async createResource(resource: string, data: ResourceData) {
    try {
      return this.RestClient!.post(resource, data)
    } catch (error) {
      console.error(`Error creating resource ${resource}:`, error)
      throw new Error(`Error creating resource ${resource}`)
    }
  }

  private async updateResource(resource: string, data: ResourceData) {
    try {
      return this.RestClient!.patch(resource, data)
    } catch (error) {
      console.error(`Error updating resource ${resource}:`, error)
      throw new Error(`Error updating resource ${resource}`)
    }
  }

  private async deleteResource(resource: string, id: number) {
    try {
      return this.RestClient!.delete(`${resource}/${id}`)
    } catch (error) {
      console.error(`Error deleting resource ${resource}/${id}:`, error)
      throw new Error(`Error deleting resource ${resource}/${id}`)
    }
  }

  public async getAuthUser() {
    return this.getResource('/users/me')
  }

  /////////////////////////////////
  // Stores
  /////////////////////////////////
  public async getStore(id: number) {
    return this.getResource(`/stores/${id}`)
  }

  public async getAllStores() {
    return this.getResource('/stores')
  }

  /////////////////////////////////
  // Customers
  /////////////////////////////////
  public async createCustomer(data: ResourceData) {
    return this.createResource('/customers', data)
  }

  public async getCustomer(id: number) {
    return this.getResource(`/customers/${id}`)
  }

  public async updateCustomer(id: number, data: ResourceData) {
    return this.updateResource(`/customers/${id}`, data)
  }

  public async getAllCustomers() {
    return this.getResource('/customers')
  }

  /////////////////////////////////
  // Products RL
  /////////////////////////////////
  public async getProduct(id: number) {
    return this.getResource(`/products/${id}`)
  }

  public async getAllProducts() {
    return this.getResource('/products')
  }

  /////////////////////////////////
  // Variants RL
  /////////////////////////////////
  public async getVariant(id: number) {
    return this.getResource(`/variants/${id}`)
  }

  public async getAllVariants() {
    return this.getResource('/variants')
  }

  /////////////////////////////////
  // Prices RL
  /////////////////////////////////
  public async getPrice(id: number) {
    return this.getResource(`/prices/${id}`)
  }

  public async getAllPrices() {
    return this.getResource('/prices')
  }

  /////////////////////////////////
  // Files RL
  /////////////////////////////////
  public async getFile(id: number) {
    return this.getResource(`/files/${id}`)
  }

  public async getAllFiles() {
    return this.getResource('/files')
  }

  /////////////////////////////////
  // Orders RL - generate order invoice
  /////////////////////////////////
  public async getOrder(id: number) {
    return this.getResource(`/orders/${id}`)
  }

  public async getAllOrders() {
    return this.getResource('/orders')
  }

  public async generateOrderInvoice(id: number) {
    // Implementation depending on API specifics
  }

  /////////////////////////////////
  // Subscriptions RUDL
  /////////////////////////////////
  public async getSubscription(id: number) {
    return this.getResource(`/subscriptions/${id}`)
  }

  public async getAllSubscriptions() {
    return this.getResource('/subscriptions')
  }

  public async updateSubscription(id: number, data: ResourceData) {
    return this.updateResource(`/subscriptions/${id}`, data)
  }

  public async deleteSubscription(id: number) {
    return this.deleteResource('/subscriptions', id)
  }

  /////////////////////////////////
  // Subscription items RUL
  /////////////////////////////////
  public async getSubscriptionItem(id: number) {
    return this.getResource(`/subscription-items/${id}`)
  }

  public async updateSubscriptionItem(id: number, data: ResourceData) {
    return this.updateResource(`/subscription-items/${id}`, data)
  }

  public async getCurrentUsage(id: number) {
    // Fetch current usage depending on API specifics
  }

  /////////////////////////////////
  // Subscription Invoices RL - Generate invoice
  /////////////////////////////////
  public async getSubscriptionInvoice(id: number) {
    return this.getResource(`/subscription-invoices/${id}`)
  }

  public async getAllSubscriptionInvoices() {
    return this.getResource('/subscription-invoices')
  }

  public async generateSubscriptionInvoice(id: number) {
    // Implementation depending on API specifics
  }

  /////////////////////////////////
  // Usage records CRL
  /////////////////////////////////
  public async createUsageRecord(data: ResourceData) {
    return this.createResource('/usage-records', data)
  }

  public async getUsageRecord(id: number) {
    return this.getResource(`/usage-records/${id}`)
  }

  public async getAllUsageRecords() {
    return this.getResource('/usage-records')
  }

  /////////////////////////////////
  // Discounts CRDL
  /////////////////////////////////
  public async createDiscount(data: ResourceData) {
    return this.createResource('/discounts', data)
  }

  public async getDiscount(id: number) {
    return this.getResource(`/discounts/${id}`)
  }

  public async updateDiscount(id: number, data: ResourceData) {
    return this.updateResource(`/discounts/${id}`, data)
  }

  public async deleteDiscount(id: number) {
    return this.deleteResource('/discounts', id)
  }

  /////////////////////////////////
  // Discount redemptions RL
  /////////////////////////////////
  public async getDiscountRedemption(id: number) {
    return this.getResource(`/discount-redemptions/${id}`)
  }

  public async getAllDiscountRedemptions() {
    return this.getResource('/discount-redemptions')
  }

  /////////////////////////////////
  // License keys RUL
  /////////////////////////////////
  public async getLicenseKey(id: number) {
    return this.getResource(`/license-keys/${id}`)
  }

  public async updateLicenseKey(id: number, data: ResourceData) {
    return this.updateResource(`/license-keys/${id}`, data)
  }

  /////////////////////////////////
  // License key instances RL
  /////////////////////////////////
  public async getLicenseKeyInstance(id: number) {
    return this.getResource(`/license-key-instances/${id}`)
  }

  public async getAllLicenseKeyInstances() {
    return this.getResource('/license-key-instances')
  }

  /////////////////////////////////
  // Checkouts CRL
  /////////////////////////////////
  public async createCheckout(data: ResourceData) {
    return this.createResource('/checkouts', data)
  }

  public async getCheckout(id: number) {
    return this.getResource(`/checkouts/${id}`)
  }

  public async getAllCheckouts() {
    return this.getResource('/checkouts')
  }

  /////////////////////////////////
  // Webhooks CRUDL
  /////////////////////////////////
  public async createWebhook(data: ResourceData) {
    return this.createResource('/webhooks', data)
  }

  public async getWebhook(id: number) {
    return this.getResource(`/webhooks/${id}`)
  }

  public async updateWebhook(id: number, data: ResourceData) {
    return this.updateResource(`/webhooks/${id}`, data)
  }

  public async deleteWebhook(id: number) {
    return this.deleteResource('/webhooks', id)
  }

  public async getAllWebhooks() {
    return this.getResource('/webhooks')
  }
}

declare module '@adonisjs/core/app' {
  interface HttpContext {
    lemonSDK: () => LemonSDK
  }
}

// @ts-ignore
