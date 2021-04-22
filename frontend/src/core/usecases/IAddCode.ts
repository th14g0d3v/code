import { TCodeModel } from '@/core/models'
/** 
 * @interface IAddCode Add a code to database
 * @method add How the data will be used in that application
 * @param IAddCode.TParam The code entered by the user
 * @returns Promise<IAddCode.TReturn> Value returned from the database asynchronously
 */
export interface IAddCode {
  add: (param: IAddCode.TParam) => Promise<IAddCode.TReturn>
}
/** 
 * @namespace IAddCode This is an internal module of this interface that contains the necessary parameters and returns for IAddCode
 * @param TParam Only code is being selected to be sent by the parameters
 * @returns TCodeModel All model data will be returned
 */
export namespace IAddCode {
  export type TParam = Pick<TCodeModel, 'code'>

  export type TReturn = TCodeModel
}
