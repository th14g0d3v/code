export type THttpRequest = {
  url: string
  method: THttpMethod
  body?: any
  headers?: any
}

export interface IHttpClient<R = any> {
  request: (data: THttpRequest) => Promise<THttpResponse<R>>
}

export type THttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum EHttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type THttpResponse<T = any> = {
  statusCode: EHttpStatusCode
  body?: T
}
