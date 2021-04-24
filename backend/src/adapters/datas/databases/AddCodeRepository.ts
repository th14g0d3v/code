import { IAddCode } from '@/core/usecases'
import { IAddCodeRepository } from '@/adapters/datas/interfaces'
/**
 * @class AddCodeRepository Has the function of adding data to the database
 * @implements IAddCode Agreement that will be respected to add value to the database
 * @param codeData Customer data
 * @returns code Receives data from the server
 */
export class AddCodeRepository implements IAddCode {
  constructor(private readonly addCodeRepository: IAddCodeRepository) { }
  async add(codeData: IAddCode.Param): Promise<IAddCode.Return> {
    const code = await this.addCodeRepository.add(codeData)
    return code
  }
}
