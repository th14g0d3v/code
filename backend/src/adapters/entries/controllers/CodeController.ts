import { IController, THttpResponse } from '@/adapters/entries/interfaces'
import { serverError, ok } from '@/adapters/entries/https'
import { IAddCode } from '@/core/usecases'
/**
 * @class CodeController Controls the route with the data
 * @implements IController The way the contract is to be performed
 * @method handle Receives customer data, adds the code to the database and returns it to the customer
 * @returns The code that was inserted into the database
 */
export class CodeController implements IController {
  constructor(private readonly addCode: IAddCode) { }

  async handle(request: CodeController.Request): Promise<THttpResponse> {
    try {
      const { code } = request
      console.log('CODE: ', code)
      const resultCode = await this.addCode.add({
        code
      })
      console.log('RESULTCODE: ', resultCode)
      return ok(resultCode)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace CodeController {
  export type Request = {
    code: string
  }
}
