/**
 * @interface IFieldValidation Responsible for validating the fields where the code will be inserted
 * @property field Item to be validated
 * @method validate Valid items entered
 * @param input Object that will be validated
 * @returns Returns an error
 */
export interface IFieldValidation {
  field: string
  validate: (input: object) => Error
}
