import { makeAddCodeRepository } from '@/frameworks/factories'
import { CodeController } from '@/adapters/entries/controllers'
import { IController } from '@/adapters/entries/interfaces'
/**
 * @var makeCodeController Responsible for controlling http requests and sending data to the database
 */
export const makeCodeController = (): IController => {
  return new CodeController(makeAddCodeRepository())
}
