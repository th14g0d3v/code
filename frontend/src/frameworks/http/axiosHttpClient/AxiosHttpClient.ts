import { THttpRequest, THttpResponse, IHttpClient } from '@/adapters/datas/interfaces/http'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements IHttpClient {
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