import { THttpResponse } from '@/adapters/entrys/interfaces'
import { ServerError } from '@/adapters/entrys/errors'

export const serverError = (error: Error): THttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): THttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): THttpResponse => ({
  statusCode: 204,
  body: null
})
