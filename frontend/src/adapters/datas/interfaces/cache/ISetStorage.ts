/** 
 * This interface looks for a key in the local storage
 * @interface ISetStorage insert a value in the local storage
 * @function set look for something in the local storage
 * @param key the key of value
 * @param set the added value
 * @returns despite the function being executed nothing will be returned
 */
export interface ISetStorage {
  set: (key: string, value: object) => void
}
