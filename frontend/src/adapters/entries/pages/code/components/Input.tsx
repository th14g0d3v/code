import { codeState } from './codeState'
import { InputBase } from '@/adapters/entries/components'

import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  type: string
  name: string
  placeholder: string
}
/**
 * @var Input Manages some properties of the input field
 * @param type The type of input
 * @param name The name of form
 * @param placeholder The text inside a form field
 * @property state Saves the value of the component state
 * @property setState Defines a value for the state
 * @return All properties from input field
 */
const Input: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(codeState)
  return (
    <InputBase
      type={type}
      name={name}
      placeholder={placeholder}
      state={state}
      setState={setState}
    />
  )
}

export default Input
