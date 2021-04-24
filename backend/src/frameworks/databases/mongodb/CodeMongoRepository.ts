import { mongoHelper } from '@/frameworks/databases/mongodb'
import { IAddCodeRepository } from '@/adapters/datas/interfaces'
/**
 * @class CodeMongoRepository Performs operations directly on the database
 * @method add Receives the customer data by parameter, saves the data in the database and returns the value
 * @returns the code inserted by client
 */
export class CodeMongoRepository implements IAddCodeRepository {
  async add(data: IAddCodeRepository.Param): Promise<IAddCodeRepository.Return> {
    const CodeCollection = await mongoHelper.getCollection('codes')
    const result = await CodeCollection.insertOne(data)
    return result.ops[0] && mongoHelper.map(result.ops[0])
  }
}
