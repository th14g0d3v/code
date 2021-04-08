import { IHttpClient, EHttpStatusCode } from '@/adapters/datas/interfaces/http'
import { IAddCode } from '@/core/usecases'
import { UnexpectedError } from '@/core/errors'

export class RemoteAddCode implements IAddCode {
  constructor (
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteAddCode.TReturn>
  ) {}

  async add (param: IAddCode.TParam): Promise<IAddCode.TReturn> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: param
    })
    switch (httpResponse.statusCode) {
      case EHttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddCode {
  export type TReturn = IAddCode.TReturn
}
