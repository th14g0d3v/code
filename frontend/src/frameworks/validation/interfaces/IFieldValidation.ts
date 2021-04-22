/**
 * @interface IFieldValidation Is responsible for validating the fields where the code will be inserted
 * @property field 
 * @method validate 
 */
export interface IFieldValidation {
  field: string
  validate: (input: object) => Error
}
