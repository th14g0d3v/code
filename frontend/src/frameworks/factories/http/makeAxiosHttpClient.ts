import { AxiosHttpClient } from '@/frameworks/http'
/**
 * @var makeAxiosHttpClient This function make a request and receive a response with axios
 * @returns An instance of a class that will send the data entered by the user and return the response
 */
export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
