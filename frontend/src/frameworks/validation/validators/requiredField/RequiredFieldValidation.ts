import { IFieldValidation } from '@/frameworks/validation/interfaces'
import { RequiredFieldError } from '@/frameworks/validation/errors'
/**
 * @class validates if the field is mandatory
 */
export class RequiredFieldValidation implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
