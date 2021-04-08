import { setCurrentCodeAdapter, getCurrentCodeAdapter } from '@/frameworks/cache/currentCodeAdapter'
import { mockCodeModel } from '@/tests/core/test'
import { LocalStorageAdapter } from '@/frameworks/cache'

jest.mock('@/frameworks/cache/localStorageAdapter/LocalStorageAdapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const code = mockCodeModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')

    setCurrentCodeAdapter(code)

    expect(setSpy).toHaveBeenCalledWith('code', code)
  })

  test('Should call LocalStorageAdapter.get with correct value', () => {
    const code = mockCodeModel()
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce(code)

    const result = getCurrentCodeAdapter()

    expect(getSpy).toHaveBeenCalledWith('code')
    expect(result).toEqual(code)
  })
})
