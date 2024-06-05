import type { ObjectOfAny } from '#types/global' // Ensure correct path

interface ResourceObjectStructure<T> {
  type: string
  id: number
  attributes: T
  relationships?: {}
  links?: {}
  meta?: {}
}

interface Paginate {
  size: number | null
  number: number | null
}

interface ResourceOptions {
  related: string[] | null
  filter: ObjectOfAny | null
  paginate: Paginate | null
  headers: ObjectOfAny | null
}

interface ResourceData {
  type: string
  attributes: ObjectOfAny
  relationships?: ObjectOfAny
  id?: string
}

interface User {
  name: string
  email: string
  color: string
  avatar_url: string
  has_custom_avatar: boolean
  createdAt: string
  updatedAt: string
}

export default class LemonSDK {
  private readonly url = 'https://api.lemonsqueezy.com/v1'
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private get headers() {
    return {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'Authorization': `Bearer ${this.apiKey}`,
    }
  }

  private getFilter(filter: ObjectOfAny) {
    let finalFilter = ''
    if (filter) {
      Object.keys(filter).forEach((item) => {
        finalFilter = `${finalFilter}&filter[${item}]=${filter[item]}`
      })
    }
    return finalFilter
  }

  private getPagination(paginate: Paginate) {
    if (paginate && paginate.size !== null && paginate.number !== null) {
      return `&page[size]=${paginate.size}&page[number]=${paginate.number}`
    }

    if (paginate && paginate.size !== null) {
      return `&page[size]=${paginate.size}`
    }

    if (paginate && paginate.number !== null) {
      return `&page[number]=${paginate.number}`
    }

    return '' // Ensure a return statement if none of the conditions are met
  }

  private getQueryString(options?: ResourceOptions) {
    if (!options) {
      return ''
    }
    const { related = null, filter = null, paginate = null } = options
    let queryString = ''

    if (related && related.length > 0) {
      queryString += `&include=${related.join(',')}`
    }

    if (filter) {
      queryString += this.getFilter(filter)
    }

    if (paginate) {
      queryString += this.getPagination(paginate)
    }

    return '?' + queryString.replace('?&', '?')
  }

  private async request<T>(
    endpoint: string,
    method: string,
    options?: ResourceOptions,
    body?: ResourceData
  ): Promise<T | Error> {
    const url = `${this.url}${endpoint}${this.getQueryString(options)}`
    // console.log({ ...this.headers, ...(options?.headers || {}) })
    try {
      const response = await fetch(url, {
        method,
        headers: { ...this.headers, ...(options?.headers || {}) },
        body: body ? JSON.stringify({ data: body }) : undefined,
      })

      if (!response.ok) {
        console.log(response)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return (await response.json()) as T
    } catch (error) {
      console.error(`Error fetching resource ${endpoint}:`, error.message)
      return error as Error
    }
  }

  private getResource<T>(resource: string, options?: ResourceOptions) {
    return this.request<ResourceObjectStructure<T>>(resource, 'GET', options)
  }

  private createResource<T>(resource: string, data: ResourceData) {
    return this.request<T>(resource, 'POST', undefined, data)
  }

  private updateResource<T>(resource: string, data: ResourceData) {
    return this.request<T>(resource, 'PATCH', undefined, data)
  }

  private deleteResource<T>(resource: string, id: number) {
    return this.request<T>(`${resource}/${id}`, 'DELETE')
  }

  public getAuthUser() {
    return this.getResource<User>('/users/me')
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

  // public async generateOrderInvoice(id: number) {
  // Implementation depending on API specifics
  // }

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

  // public async getCurrentUsage(id: number) {
  // Fetch current usage depending on API specifics
  // }

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
