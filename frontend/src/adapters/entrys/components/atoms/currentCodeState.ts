import { TCodeModel } from '@/core/models'

import { atom } from 'recoil'

export const currentCodeState = atom({
  key: 'currentCodeState',
  default: {
    getCurrentCode: null as () => TCodeModel,
    setCurrentCode: null as (code: TCodeModel) => void
  }
})
