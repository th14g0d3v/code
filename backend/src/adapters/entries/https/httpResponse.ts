import { THttpResponse } from '@/adapters/entries/interfaces'
import { ServerError } from '@/adapters/entries/errors'
/**
 * @var serverError When something unexpected is performed on the server
 * @param error Error generated in the operation
 * @returns The status code of the request and the error stack
 */
export const serverError = (error: Error): THttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})
/**
 * @var ok Execute the request and response without errors and bring the data
 * @param data Requisition data
 * @returns The status code of the request and the data
 */
export const ok = (data: any): THttpResponse => ({
  statusCode: 200,
  body: data
})
/**
 * @var noContent Indicates that the request was successful and the customer does not need to leave the current page
 * @returns The status code of the request and null
 */
export const noContent = (): THttpResponse => ({
  statusCode: 204,
  body: null
})
