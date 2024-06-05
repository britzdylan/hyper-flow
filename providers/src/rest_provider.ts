import { HttpContext } from '@adonisjs/core/http'
/**
 * ApiClient class to make HTTP requests using node-fetch
 */
export class RestClient {
  private baseURL: string
  private init: RequestInit
  private log: boolean

  /**
   * Creates an instance of ApiClient.
   * @param {string} baseURL - The base URL for the API.
   * @param {RequestInit} [init={}] - Optional initial request configuration.
   */
  constructor(baseURL: string, init: RequestInit = {}, log?: boolean) {
    this.baseURL = baseURL
    this.init = init
    this.log = log ?? false
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
    if (this.log) {
      console.log('/////////////////////////////////////////////////////////////////////////////')
      console.log(url)
      console.log(options)
      console.log('/////////////////////////////////////////////////////////////////////////////')
    }
    const response: Response = await fetch(url, options)

    if (!response.ok) {
      const errorBody = await response.json()
      if (this.log) {
        console.log('/////////////////////////////////////////////////////////////////////////////')
        console.log(errorBody)
        console.log('/////////////////////////////////////////////////////////////////////////////')
      }
      return new Error(
        `Error ${response.status}: ${response.statusText} - ${JSON.stringify(errorBody)}`
      )
    }
    if (this.log) {
      console.log('/////////////////////////////////////////////////////////////////////////////')
      console.log(response)
      console.log('/////////////////////////////////////////////////////////////////////////////')
    }

    return response.json()
  }

  /**
   * Makes a GET request.
   * @param {string} endpoint - The endpoint to request.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request(endpoint, {
      method: 'GET',
      headers: {
        ...this.init.headers,
        ...headers,
      },
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
      headers: { 'Content-Type': 'application/json', ...this.init.headers, ...headers },
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
      headers: { 'Content-Type': 'application/json', ...this.init.headers, ...headers },
      body: JSON.stringify(body),
    })
  }

  /**
   * Makes a PATCH request.
   * @param {string} endpoint - The endpoint to request.
   * @param {any} body - The request body.
   * @param {Record<string, string>} [headers={}] - Optional headers.
   * @returns {Promise<any>} - The response JSON.
   */
  public patch(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', ...this.init.headers, ...headers },
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
      headers: {
        ...this.init.headers,
        ...headers,
      },
    })
  }
}

// Example usage
// const apiClient = new ApiClient('https://api.example.com');
// apiClient.get('/endpoint').then(response => console.log(response)).catch(error => console.error(error));

// @ts-ignore
HttpContext.getter('restClient', async () => {
  const config = {
    //TODO get from global config
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
