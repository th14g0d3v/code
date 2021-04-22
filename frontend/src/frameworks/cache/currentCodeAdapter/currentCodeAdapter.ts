import { makeLocalStorageAdapter } from '@/frameworks/factories/cache'
import { TCodeModel } from '@/core/models'
/**
 * @var setCurrentCodeAdapter Defines a code in the local storage
 * @param code The data model that will be saved to the local storage
 * @returns Parameter code data is defined in the local storage
 */
export const setCurrentCodeAdapter = (code: TCodeModel): void => {
  makeLocalStorageAdapter().set('code', code)
}
/**
 * @var getCurrentCodeAdapter Search for code in local storage
 * @param code The data model that will be fetched to the local storage
 * @returns Parameter code data is fetched from the local storage
 */
export const getCurrentCodeAdapter = (): TCodeModel => {
  return makeLocalStorageAdapter().get('code')
}
