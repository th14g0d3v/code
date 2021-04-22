import React from 'react'

type Props = {
  text: string
  state: any
}
/**
 * @var SubmitButton It's a form button
 * @param state Component state value
 * @param text Button name
 * @field disabled If the data entered in the form does not meet the validations, the button is not activated
 * @returns Shows a button with text on it
 */
const SubmitButton: React.FC<Props> = ({ state, text }: Props) => {
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">{text}</button>
  )
}

export default SubmitButton
