import { ISetStorage, IGetStorage } from '@/adapters/datas/interfaces/cache'
/**
 * @class LocalStorageAdapter Set a value or search for a value in local storage
 * @implements ISetStorage Follows the agreement on how to set a value on local storage
 * @implements IGetStorage Follows the contract on how to fetch a value from local storage
 */
export class LocalStorageAdapter implements ISetStorage, IGetStorage {
  /**
   * @method set Performs the action of saving some data to local storage with a key and a value
   * @param key The key that will be used to identify the data in the local store
   * @param value Value to be saved
   */
  set (key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }
  /**
   * @method get Performs the action of searching for some data in the local storage with a key
   * @param key The key that will be used to identify the data in the local store
   * @returns Parses a JSON string, building the value or an object
   */
  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
