import { IAddCode } from '@/core/usecases'
import { IAddCodeRepository } from '@/adapters/datas/interfaces'

export class AddCodeRepository implements IAddCode {
  constructor(private readonly addCodeRepository: IAddCodeRepository) { }

  async add(codeData: IAddCode.Param): Promise<IAddCode.Return> {
    const code = await this.addCodeRepository.add(codeData)
    return code
  }
}
