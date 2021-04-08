import { IAddCode } from '@/core/usecases'

export interface IAddCodeRepository {
  add: (data: IAddCodeRepository.Param) => Promise<IAddCodeRepository.Return>
}

export namespace IAddCodeRepository {
  export type Param = IAddCode.Param
  export type Return = IAddCode.Return
}
