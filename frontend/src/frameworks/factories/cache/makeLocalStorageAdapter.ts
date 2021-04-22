import { LocalStorageAdapter } from '@/frameworks/cache'
/**
 * @var makeLocalStorageAdapter Responsible for loading data or saving data to local storage
 * @returns A new instance of the local storage adapter
 */
export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
