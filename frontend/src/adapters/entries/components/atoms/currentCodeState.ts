import { TCodeModel } from '@/core/models'
/**
 * Recoil is an experimental set of utilities for state management with React
 */
import { atom } from 'recoil'
/** 
 * @var currentCodeState Responsible for the current state of the code field
 * @property key Code field state value
 * @property default Contains two fields with objects. The first getCurrentCode field is an anonymous function that returns the application's data model. The second setCurrentCode field is an anonymous function that sends the code to the server and does not return anything
 */
export const currentCodeState = atom({
  key: 'currentCodeState',
  default: {
    getCurrentCode: null as () => TCodeModel,
    setCurrentCode: null as (code: TCodeModel) => void
  }
})
