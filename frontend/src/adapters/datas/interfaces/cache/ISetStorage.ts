/** 
 * @interface ISetStorage Insert a value in the local storage
 * @method set Set something in the local storage
 * @param key The key of value
 * @param set The added value
 * @returns Despite the function being executed nothing will be returned
 */
export interface ISetStorage {
  set: (key: string, value: object) => void
}
