import { CodeController } from '@/adapters/entrys/controllers'
import { ServerError } from '@/adapters/entrys/errors'
import { ok, serverError } from '@/adapters/entrys/https'
import { AddCodeSpy } from '@/tests/adapters/entrys/mocks'
import { throwError } from '@/tests/core/mocks'

import faker from 'faker'

const mockRequest = (): CodeController.Request => {
  return {
    code: faker.fake('1a2b3c4d5e')
  }
}

type SutTypes = {
  sut: CodeController
  addCodeSpy: AddCodeSpy
}

const makeSut = (): SutTypes => {
  const addCodeSpy = new AddCodeSpy()
  const sut = new CodeController(addCodeSpy)
  return {
    sut,
    addCodeSpy,
  }
}

describe('Code Controller', () => {
  test('Should return 500 if AddCode throws', async () => {
    const { sut, addCodeSpy } = makeSut()
    jest.spyOn(addCodeSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call AddCode with correct values', async () => {
    const { sut, addCodeSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addCodeSpy.codeData).toEqual({
      code: request.code
    })
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut, addCodeSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(addCodeSpy.return))
  })
})
