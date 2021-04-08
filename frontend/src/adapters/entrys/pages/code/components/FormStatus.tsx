import { codeState } from './codeState'
import { FormStatusBase } from '@/adapters/entrys/components'

import { useRecoilValue } from 'recoil'
import React from 'react'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(codeState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
