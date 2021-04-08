import { makeAddCodeRepository } from '@/frameworks/factories'
import { CodeController } from '@/adapters/entrys/controllers'
import { IController } from '@/adapters/entrys/interfaces'

export const makeCodeController = (): IController => {
  return new CodeController(makeAddCodeRepository())
}
