import { TCodeModel } from "@/core/entities"

export interface IAddCode {
  add: (codeData: IAddCode.Param) => Promise<IAddCode.Return>
}

export namespace IAddCode {
  export type Param = Pick<TCodeModel, 'code'>
  export type Return = TCodeModel
}
