import { mongoHelper } from '@/frameworks/databases/mongodb'
import { IAddCodeRepository } from '@/adapters/datas/interfaces'

export class CodeMongoRepository implements IAddCodeRepository {
  async add(data: IAddCodeRepository.Param): Promise<IAddCodeRepository.Return> {
    const CodeCollection = await mongoHelper.getCollection('codes')
    const result = await CodeCollection.insertOne(data)
    return result.ops[0] && mongoHelper.map(result.ops[0])
  }
}
