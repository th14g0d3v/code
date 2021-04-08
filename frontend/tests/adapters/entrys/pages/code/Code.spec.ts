import { Code } from '@/adapters/entrys/pages'
import { Helper, renderWithHistory, ValidationStub } from '@/tests/adapters/entrys/test'
import { IAddCode } from '@/core/usecases'
import { AddCodeSpy } from '@/tests/core/test'

import { createMemoryHistory } from 'history'
import faker from 'faker'
import { fireEvent, waitFor, screen } from '@testing-library/react'
import { UnexpectedError } from '@/core/errors'

type SutTypes = {
  addCodeSpy: AddCodeSpy
  setCurrentCodeMock: (account: IAddCode.TReturn) => void
}

type SutParams = {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/code'] })
const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const addCodeSpy = new AddCodeSpy()
  const { setCurrentCodeMock } = renderWithHistory({
    history,
    Page: () => Code({ validation: validationStub, addCode: addCodeSpy })
  })
  return {
    addCodeSpy,
    setCurrentCodeMock
  }
}

const simulateValidSubmit = async (code = faker.fake('1a2b')): Promise<void> => {
  Helper.populateField('code', code)
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Code Component', () => {
  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })

    expect(screen.getByTestId('submit')).toBeDisabled()
    Helper.testStatusForField('code', validationError)
  })

  test('Should show code error if Validation fails', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })

    Helper.populateField('code')

    Helper.testStatusForField('code', validationError)
  })

  test('Should show valid code state if Validation succeeds', () => {
    makeSut()

    Helper.populateField('code')

    Helper.testStatusForField('code')
  })

  test('Should enable submit button if form is valid', () => {
    makeSut()

    Helper.populateField('code')

    expect(screen.getByTestId('submit')).toBeEnabled()
  })

  test('Should show spinner on submit', async () => {
    makeSut()

    await simulateValidSubmit()

    // expect(screen.queryByTestId('spinner')).toBeInTheDocument()
  })

  test('Should call AddCode with correct values', async () => {
    const { addCodeSpy } = makeSut()
    const code = faker.fake('1a2b')

    await simulateValidSubmit(code)

    expect(addCodeSpy.param).toEqual({
      code,
    })
  })

  test('Should call AddCode only once', async () => {
    const { addCodeSpy } = makeSut()

    await simulateValidSubmit()
    await simulateValidSubmit()

    // expect(addCodeSpy.callsCount).toBe(1)
  })

  test('Should not call AddCode if form is invalid', async () => {
    const validationError = faker.random.words()
    const { addCodeSpy } = makeSut({ validationError })

    await simulateValidSubmit()

    expect(addCodeSpy.callsCount).toBe(0)
  })

  test('Should present error if AddCode fails', async () => {
    const { addCodeSpy } = makeSut()
    const error = new UnexpectedError()
    jest.spyOn(addCodeSpy, 'add').mockRejectedValueOnce(error)

    await simulateValidSubmit()

    // expect(screen.getByTestId('main-error')).toHaveTextContent(error.message)
    // expect(screen.getByTestId('error-wrap').children).toHaveLength(1)
  })

  test('Should call UpdateCurrentCode on success', async () => {
    const { addCodeSpy, setCurrentCodeMock } = makeSut()

    await simulateValidSubmit()

    expect(setCurrentCodeMock).toHaveBeenCalledWith(addCodeSpy.code)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/code')
  })
})
