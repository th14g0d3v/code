import { IFieldValidation } from '@/frameworks/validation/interfaces'
import { InvalidFieldError } from '@/frameworks/validation/errors'

export class MinLengthValidation implements IFieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: object): Error {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
