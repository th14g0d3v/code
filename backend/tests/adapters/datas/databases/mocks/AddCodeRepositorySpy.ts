import { IAddCodeRepository } from '@/adapters/datas/interfaces'

export class AddCodeRepositorySpy implements IAddCodeRepository {
  data: IAddCodeRepository.Param
  return: IAddCodeRepository.Return

  async add (data: IAddCodeRepository.Param): Promise<IAddCodeRepository.Return> {
    this.data = data
    return this.return
  }
}
