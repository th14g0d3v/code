import { IFieldValidation } from '@/frameworks/validation/interfaces'
import { RequiredFieldValidation, MinLengthValidation, CompareFieldsValidation } from '@/frameworks/validation/validators'
/**
 * @class this class have all validators
 */
export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: IFieldValidation[]
  ) {}
  /**
   * @method field validates data entry fields
   */
  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }
  /**
   * @method required check if the field is mandatory
   */
  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }
  /**
   * @method min the minimum number of characters entered is valid
   */
  min (length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }
  /**
   * @method sameAs compare fields
   */
  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): IFieldValidation[] {
    return this.validations
  }
}
