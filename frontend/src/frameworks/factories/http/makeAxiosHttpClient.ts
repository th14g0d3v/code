import { AxiosHttpClient } from '@/frameworks/http'
/**
 * @var makeAxiosHttpClient This function make a request and receive a response with axios
 */
export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
