import { ValidationComposite, ValidationBuilder as Builder } from '@/frameworks/validation/validators'
/**
 * @var makeCodeValidation Validator that ensures that the code field of the form will be at least 3 characters long
 * @returns ValidationComposite This creates the application's validators
 */
export const makeCodeValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('code').required().min(3).build(),
])
