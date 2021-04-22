import { codeState } from './codeState'
import { FormStatusBase } from '@/adapters/entries/components'

import { useRecoilValue } from 'recoil'
import React from 'react'
/**
 * @var FormStatus Manage the state of the form
 * @var state Save the code component state value
 * @returns The state of the form
 */
const FormStatus: React.FC = () => {
  const state = useRecoilValue(codeState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
