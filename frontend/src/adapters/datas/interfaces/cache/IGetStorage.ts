/** 
 * This interface looks for a key in the local storage
 * @interface IGetStorage look for something in the local storage
 * @function get using a key returns some value
 * @param key the key of value
 * @returns any type of value will be returned
 */
export interface IGetStorage {
  get: (key: string) => any
}
