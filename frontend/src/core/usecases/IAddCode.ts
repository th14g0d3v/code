import { TCodeModel } from '@/core/models'

export interface IAddCode {
  add: (param: IAddCode.TParam) => Promise<IAddCode.TReturn>
}

export namespace IAddCode {
  export type TParam = Pick<TCodeModel, 'code'>

  export type TReturn = TCodeModel
}
