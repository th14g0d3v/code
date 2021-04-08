import { atom } from 'recoil'

export const codeState = atom({
  key: 'codeState',
  default: {
    isLoading: false,
    isFormInvalid: true,
    code: '',
    codeError: '',
    mainError: ''
  }
})
