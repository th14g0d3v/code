/** 
 * @type THttpRequest All data for an http request
 * @property url Address of request
 * @property method The action performed
 * @property body Data that the user enters
 * @property headers Additional information as token
 */
export type THttpRequest = {
  url: string
  method: THttpMethod
  body?: any
  headers?: any
}
/** 
 * @interface IHttpClient Request pattern
 * @method request Sends some data and receives the answer
 * @param data Requisition data
 * @returns Promise<THttpResponse<R>> Asynchronously receives data from the server
 */
export interface IHttpClient<R = any> {
  request: (data: THttpRequest) => Promise<THttpResponse<R>>
}
/** 
 * @type THttpMethod All actions that this application uses to communicate with the server
 */
export type THttpMethod = 'post' | 'get' | 'put' | 'delete'
/** 
 * @enum EHttpStatusCode Defining constants for status codes
 */
export enum EHttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
/** 
 * @type THttpResponse Server response
 * @property statusCode Number that identifies what happened in a communication with a server
 * @property body All data returned by the server
 */
export type THttpResponse<T = any> = {
  statusCode: EHttpStatusCode
  body?: T
}
