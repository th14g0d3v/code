import { ValidationComposite, ValidationBuilder as Builder } from '@/frameworks/validation/validators'

export const makeCodeValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('code').required().min(3).build(),
])
