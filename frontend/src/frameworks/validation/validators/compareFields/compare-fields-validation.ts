import { IFieldValidation } from '@/frameworks/validation/interfaces'
import { InvalidFieldError } from '@/frameworks/validation/errors'

export class CompareFieldsValidation implements IFieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate (input: object): Error {
    return input[this.field] !== input[this.fieldToCompare] ? new InvalidFieldError() : null
  }
}
