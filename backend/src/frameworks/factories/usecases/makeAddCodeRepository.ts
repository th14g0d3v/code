import { AddCodeRepository } from '@/adapters/datas/databases'
import { IAddCode } from '@/core/usecases'
import { CodeMongoRepository } from '@/frameworks/databases/mongodb'

export const makeAddCodeRepository = (): IAddCode => {
  const codeMongoRepository = new CodeMongoRepository()
  return new AddCodeRepository(codeMongoRepository)
}
