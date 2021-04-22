/**
 * @interface IValidation Validate data field and data
 * @method validate Sends the name of the field and data and returns a string
 * @param fieldName Field to be validated
 * @param input Input data
 * @returns Will return a string 
 */
export interface IValidation {
  validate: (fieldName: string, input: object) => string
}
