import { makeLocalStorageAdapter } from '@/frameworks/factories/cache'
import { TCodeModel } from '@/core/models'

export const setCurrentCodeAdapter = (code: TCodeModel): void => {
  makeLocalStorageAdapter().set('code', code)
}

export const getCurrentCodeAdapter = (): TCodeModel => {
  return makeLocalStorageAdapter().get('code')
}
