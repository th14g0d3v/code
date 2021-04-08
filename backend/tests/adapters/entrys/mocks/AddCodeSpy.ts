import { IAddCode } from '@/core/usecases'

export class AddCodeSpy implements IAddCode {
  codeData: IAddCode.Param
  return: IAddCode.Return

  async add (codeData: IAddCode.Param): Promise<IAddCode.Return> {
    this.codeData = codeData
    return this.return
  }
}
