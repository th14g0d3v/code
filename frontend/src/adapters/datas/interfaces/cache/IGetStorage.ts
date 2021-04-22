/** 
 * @interface IGetStorage Looks for a key in the local storage
 * @method get Using a key returns some value
 * @param key The key of value
 * @returns Any type of value will be returned
 */
export interface IGetStorage {
  get: (key: string) => any
}
