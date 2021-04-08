import { LocalStorageAdapter } from '@/frameworks/cache'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
