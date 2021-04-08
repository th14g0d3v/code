import { AddCodeRepository } from '@/adapters/datas/databases'
import { mockAddCodeParam, throwError } from '@/tests/core/mocks'
import { AddCodeRepositorySpy } from '@/tests/adapters/datas/databases/mocks'

type SutTypes = {
  sut: AddCodeRepository
  addCodeRepositorySpy: AddCodeRepositorySpy
}

const makeSut = (): SutTypes => {
  const addCodeRepositorySpy = new AddCodeRepositorySpy()
  const sut = new AddCodeRepository(addCodeRepositorySpy)
  return {
    sut,
    addCodeRepositorySpy
  }
}

describe('AddCodeRepository Usecase', () => {
  test('Should call AddCodeRepository with correct code', async () => {
    const { sut, addCodeRepositorySpy } = makeSut()
    const addCodeParams = mockAddCodeParam()
    await sut.add(addCodeParams)
    expect(addCodeRepositorySpy.data).toEqual({
      code: addCodeParams.code
    })
  })

  test('Should throw if AddCodeRepository throws', async () => {
    const { sut, addCodeRepositorySpy } = makeSut()
    jest.spyOn(addCodeRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddCodeParam())
    expect(promise).rejects.toThrow()
  })
})
