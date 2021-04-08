import Styles from './codeStyles.scss'
import { codeState, Input, SubmitButton, FormStatus } from './components'
import { currentCodeState, Logo } from '@/adapters/entrys/components'
import { IValidation } from '@/adapters/entrys/interfaces'
import { IAddCode } from '@/core/usecases'

import { useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import React, { useEffect } from 'react'

type Props = {
  validation: IValidation
  addCode: IAddCode
}

const Code: React.FC<Props> = ({ validation, addCode }: Props) => {
  const resetCodeState = useResetRecoilState(codeState)
  const resetCurrentCodeState = useResetRecoilState(currentCodeState)
  const { setCurrentCode, getCurrentCode } = useRecoilValue(currentCodeState)
  const data = getCurrentCode()
  const history = useHistory()
  const [state, setState] = useRecoilState(codeState)

  useEffect(() => resetCodeState(), [])
  useEffect(() => validate('code'), [state.code])

  const validate = (field: string): void => {
    const { code } = state
    const formData = { code }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.codeError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState(old => ({ ...old, isLoading: true }))
      const code = await addCode.add({
        code: state.code,
      })
      setCurrentCode(code)
      setState((old) => ({
        ...old,
        code: data.id
      }));
      useEffect(() => resetCodeState(), []);
      useEffect(() => resetCurrentCodeState(), []);
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <div className={Styles.codeWrap}>
      {/* <Logo /> */}
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
      <Logo />
        <Input type="text" name="code" placeholder="Type your code" />
        <div className={Styles.codeResultWrap}>{data.code}</div>
        <SubmitButton text="Send Code" />
      </form>
    </div>
  )
}

export default Code
