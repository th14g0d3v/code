import { makeApiUrl, makeAxiosHttpClient } from '@/frameworks/factories/http'
import { IAddCode } from '@/core/usecases'
import { RemoteAddCode } from '@/adapters/datas/usecases'
/**
 * @var makeRemoteAddCode Send the code entered by the user to the code route with Axios
 * @returns RemoteAddCode This class will make a request with the data that the user enters in the interface input
 * makeApiUrl This function helps with the full address of the api and the route
 * makeAxiosHttpClient This function executes the request and receives the response from the server
 */
export const makeRemoteAddCode = (): IAddCode =>
  new RemoteAddCode(makeApiUrl('/code'), makeAxiosHttpClient())
