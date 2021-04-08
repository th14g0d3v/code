import { TCodeModel } from '@/core/models'

import faker from 'faker'

export const mockCodeModel = (): TCodeModel => ({
  id: faker.datatype.uuid(),
  code: faker.fake('1a2b')
})
