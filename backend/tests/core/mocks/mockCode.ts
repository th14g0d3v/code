import { IAddCode } from '@/core/usecases'

import faker from 'faker'

export const mockAddCodeParam = (): IAddCode.Param => ({
  code: faker.fake('1a2b'),
})
