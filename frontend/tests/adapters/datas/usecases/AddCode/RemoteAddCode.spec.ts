import { RemoteAddCode } from '@/adapters/datas/usecases'
import { HttpClientSpy } from '@/tests/adapters/datas/interfaces'
import { EHttpStatusCode } from '@/adapters/datas/interfaces/http'
import { mockAddCodeParam, mockAddCodeModel } from '@/tests/core/test'
import { UnexpectedError } from '@/core/errors'

import faker from 'faker'

type SutTypes = {
  sut: RemoteAddCode
  httpClientSpy: HttpClientSpy<RemoteAddCode.TReturn>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteAddCode.TReturn>()
  const sut = new RemoteAddCode(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteAddCode', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const addCodeParam = mockAddCodeParam()

    await sut.add(addCodeParam)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(addCodeParam)
  })

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: EHttpStatusCode.badRequest
    }

    const promise = sut.add(mockAddCodeParam())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: EHttpStatusCode.serverError
    }

    const promise = sut.add(mockAddCodeParam())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: EHttpStatusCode.notFound
    }

    const promise = sut.add(mockAddCodeParam())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AddAccount.Model if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockAddCodeModel()
    httpClientSpy.response = {
      statusCode: EHttpStatusCode.ok,
      body: httpResult
    }

    const account = await sut.add(mockAddCodeParam())

    expect(account).toEqual(httpResult)
  })
})
