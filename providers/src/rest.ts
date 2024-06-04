import { HttpContext } from '@adonisjs/core/http'
/**
 * ApiClient class to make HTTP requests using node-fetch
 */
export class RestClient {
  private baseURL: string
  private init: RequestInit

  /**
   * Creates an instance of ApiClient.
   * @param {string} baseURL - The base URL for the API.
   * @param {RequestInit} [init={}] - Optional initial request configuration.
   */
  constructor(baseURL: string, init: RequestInit = {}) {
    this.baseURL = baseURL
    this.init = init
  }

  /**
   * Makes an HTTP request.
   * @private
   * @param {string} endpoint - The endpoint to request.
   * @param {RequestInit} options - The request options.
   * @returns {Promise<any>} - The response JSON.
   * @throws Will throw an error if the response status is not ok.
   */
  private async request(endpoint: string, options: RequestInit): Promise<any> {
    const url = `${this.baseURL}${endpoint}`
    const response: Response = await fetch(url, { ...this.init, ...options })

    if (!response.ok) {
      const errorBody = await response.json()
      return new Error(
        `Error ${response.status}: ${response.statusText} - ${JSON.stringify(errorBody)}`
      )
    }

    return response.json()
  }

  /**
   * Makes a GET request.
   * @param {string} endpoint - The endpoint to request.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public get(endpoint: string, headers: Record<string, string> = {}): Promise<any> {
    return this.request(endpoint, {
      method: 'GET',
      headers,
    })
  }

  /**
   * Makes a POST request.
   * @param {string} endpoint - The endpoint to request.
   * @param {any} body - The request body.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public post(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    })
  }

  /**
   * Makes a PUT request.
   * @param {string} endpoint - The endpoint to request.
   * @param {any} body - The request body.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public put(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    })
  }

  /**
   * Makes a DELETE request.
   * @param {string} endpoint - The endpoint to request.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public delete(endpoint: string, headers: Record<string, string> = {}): Promise<any> {
    return this.request(endpoint, {
      method: 'DELETE',
      headers,
    })
  }
}

// Example usage
// const apiClient = new ApiClient('https://api.example.com');
// apiClient.get('/endpoint').then(response => console.log(response)).catch(error => console.error(error));

// @ts-ignore
HttpContext.macro('restClient', async () => {
  const config = {
    json: {
      url: 'https://jsonplaceholder.typicode.com',
      init: {
        headers: { Authorization: 'Bearer 123' },
      },
    },
  }
  const client = {}

  Object.keys(config).forEach((item) => {
    // @ts-ignore
    let c = new RestClient(config[item].url, { ...config[item].init })
    // @ts-ignore
    client[item] = c
  })

  return client
})

declare module '@adonisjs/core/app' {
  export interface HttpContext {
    restClient: Map<string, RestClient>
  }
}