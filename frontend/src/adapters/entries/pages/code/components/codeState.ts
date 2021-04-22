import { atom } from 'recoil'
/**
 * @var codeState Are all items that will have their status changed
 * @property key The state name
 * @property default A object with others objects
 * @property isLoading Checks if the page is loaded, if it does not display loading animation
 * @property isFormInvalid Checks if the form meets all validations
 * @property code Save the value of the code entered
 * @property codeError Save the error value
 * @property mainError Save the types of errors
 */
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
