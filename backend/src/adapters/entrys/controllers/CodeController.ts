import { IController, THttpResponse } from '@/adapters/entrys/interfaces'
import { serverError, ok } from '@/adapters/entrys/https'
import { IAddCode } from '@/core/usecases'

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
