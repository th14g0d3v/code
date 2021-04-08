import { THttpRequest, THttpResponse, EHttpStatusCode, IHttpClient } from '@/adapters/datas/interfaces/http'

import faker from 'faker'

export const mockHttpRequest = (): THttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})

export class HttpClientSpy<R = any> implements IHttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: THttpResponse<R> = {
    statusCode: EHttpStatusCode.ok
  }

  async request (data: THttpRequest): Promise<THttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
