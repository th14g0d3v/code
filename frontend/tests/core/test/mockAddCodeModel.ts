import { IAddCode } from '@/core/usecases'
import { mockCodeModel } from '@/tests/core/test/mockCode'

import faker from 'faker'

export const mockAddCodeParam = (): IAddCode.TParam => {
  return {
    code: faker.fake('1a2b')
  }
}

export const mockAddCodeModel = (): IAddCode.TReturn => mockCodeModel()

export class AddCodeSpy implements IAddCode {
  code = mockAddCodeModel()
  param: IAddCode.TParam
  callsCount = 0

  async add (param: IAddCode.TParam): Promise<IAddCode.TReturn> {
    this.param = param
    this.callsCount++
    return this.code
  }
}
