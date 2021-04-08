import { THttpResponse } from '@/adapters/entrys/interfaces'

export interface IController<T = any> {
  handle: (request: T) => Promise<THttpResponse>
}
