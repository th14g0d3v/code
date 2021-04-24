import { THttpResponse } from '@/adapters/entries/interfaces'
/**
 * @interface IController The contract for how an http request should be handled
 */
export interface IController<T = any> {
  handle: (request: T) => Promise<THttpResponse>
}
