import { IAddCode } from '@/core/usecases'
/**
 * @interface IAddCodeRepository An abstraction from a mongoDB repository
 */
export interface IAddCodeRepository {
  add: (data: IAddCodeRepository.Param) => Promise<IAddCodeRepository.Return>
}

export namespace IAddCodeRepository {
  export type Param = IAddCode.Param
  export type Return = IAddCode.Return
}
