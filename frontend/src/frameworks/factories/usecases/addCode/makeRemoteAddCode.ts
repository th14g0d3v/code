import { makeApiUrl, makeAxiosHttpClient } from '@/frameworks/factories/http'
import { IAddCode } from '@/core/usecases'
import { RemoteAddCode } from '@/adapters/datas/usecases'

export const makeRemoteAddCode = (): IAddCode =>
  new RemoteAddCode(makeApiUrl('/code'), makeAxiosHttpClient())
