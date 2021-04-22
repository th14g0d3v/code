import { IHttpClient, EHttpStatusCode } from '@/adapters/datas/interfaces/http'
import { IAddCode } from '@/core/usecases'
import { UnexpectedError } from '@/core/errors'
/**
 * @class Execute an http request to the server
 * @implements IAddCode Add code
 * @constructs url Address used for the request
 * @constructs httpClient Interface that contains the signature of a request and http response
 * @method add Through the parameters it adds the value typed by the user to the request
 * @param IAddCode.TParam Value that the user wants to enter
 * @returns Asynchronously returns the code and its database id
 * @var httpResponse Asynchronously execute the request and save the response
 * @field switch Use the status code to receive a response to server data or an error message
 */
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
/** 
 * @namespace RemoteAddCode An internal module with only the data to return
 */
export namespace RemoteAddCode {
  export type TReturn = IAddCode.TReturn
}
