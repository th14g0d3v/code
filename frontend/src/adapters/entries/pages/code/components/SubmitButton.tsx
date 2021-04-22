import { codeState } from './codeState'
import { SubmitButtonBase } from '@/adapters/entries/components'

import { useRecoilValue } from 'recoil'
import React from 'react'

type Props = {
  text: string
}
/**
 * @var SubmitButton Manages the state of the button
 * @param text Name of button
 * @var state Returns the value of the given Recoil state
 * @returns A submit Button with text in your name and state
 */
const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(codeState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
