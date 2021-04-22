import Styles from './inputStyles.scss'

import React, { useRef } from 'react'
/**
 * @type Props Properties of an input
 */
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}
/**
 * @var Input Receives and saves user data in a blank field on the page
 * @param state Component state value
 * @param setState Sets the state value of the component
 * @param props Everyone to the properties of that HTML object
 * @var inputRef Returns a mutable ref object whose current property is initialized to the passed argument initial Value
 * @var error The message error
 * @returns An input field of a form and the name of the input field
 * @property ref Change the value of an input element, but without using props or re-rendering the whole component
 * @property title Specifies extra information about an element, in this case, about errors
 * @property placeholder The short hint is displayed in the input field before the user enters a value
 * @property data-testid Prevents tests from failing
 * @property readOnly Means we don’t intend for the input to be modified by user input
 * @event onFocus It is an element that gets the user’s focus
 * @event onChange An element has been changed your value
 * @property label Inform users the value to be entered in the associated entry field
 */
const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  return (
    <div data-testid={`${props.name}-wrap`} className={Styles.inputWrap} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label data-testid={`${props.name}-label`} onClick={() => { inputRef.current.focus() }} title={error}>
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
