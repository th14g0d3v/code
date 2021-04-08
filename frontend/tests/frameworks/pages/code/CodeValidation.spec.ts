import { makeCodeValidation } from '@/frameworks/factories/pages'
import { ValidationComposite, RequiredFieldValidation, MinLengthValidation, CompareFieldsValidation } from '@/frameworks/validation/validators'

describe('CodeValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeCodeValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('code'),
      new MinLengthValidation('code', 3),
    ]))
  })
})
