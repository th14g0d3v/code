import { TCodeModel } from "@/core/entities"
/**
 * @interface IAddCode How a code will be inserted into the database
 */
export interface IAddCode {
  add: (codeData: IAddCode.Param) => Promise<IAddCode.Return>
}

export namespace IAddCode {
  export type Param = Pick<TCodeModel, 'code'>
  export type Return = TCodeModel
}
