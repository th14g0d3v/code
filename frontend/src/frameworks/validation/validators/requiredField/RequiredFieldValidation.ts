import { IFieldValidation } from '@/frameworks/validation/interfaces'
import { RequiredFieldError } from '@/frameworks/validation/errors'

export class RequiredFieldValidation implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
