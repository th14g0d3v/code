import { codeState } from './codeState'
import { SubmitButtonBase } from '@/adapters/entrys/components'

import { useRecoilValue } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(codeState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
