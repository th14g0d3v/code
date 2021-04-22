import { THttpRequest, THttpResponse, IHttpClient } from '@/adapters/datas/interfaces/http'

import axios, { AxiosResponse } from 'axios'
/**
 * @class AxiosHttpClient Receives data from the user and sends it by request to a server that responds with status code and the code back
 * @implements IHttpClient A maneira como a requisição e resposta será executado
 * @method request Envia os dados para o servidor e recebe a resposta
 * @param data Dados necessarios para a requisição
 * @var axiosResponse Resposta do servidor com status code e os dados
 * @returns Promise<THttpResponse> 
 */
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
