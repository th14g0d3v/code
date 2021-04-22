import { THttpRequest, THttpResponse, IHttpClient } from '@/adapters/datas/interfaces/http'

import axios, { AxiosResponse } from 'axios'
/**
 * @class AxiosHttpClient Receives data from the user and sends it by request to a server that responds with status code and the code back
 * @implements IHttpClient The way the request and response will be executed
 * @returns Promise<THttpResponse> Asynchronously return status code and server data
 */
export class AxiosHttpClient implements IHttpClient {
  /**
   * @method request Sends the data to the server and receives the response
   * @param data Necessary data for the requisition
   * @var axiosResponse Server response with status code and data
   */
  async request (data: THttpRequest): Promise<THttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
