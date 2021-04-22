import { IValidation } from '@/adapters/entries/interfaces'

export class ValidationStub implements IValidation {
  errorMessage: string

  validate (fieldName: string, input: object): string {
    return this.errorMessage
  }
}
