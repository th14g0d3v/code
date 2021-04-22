import Styles from './errorStyles.scss'

import React from 'react'
/**
 * @type Props Data model for errors
 * @property error An error message
 * @property reload Just reload the page
 */
type Props = {
  error: string
  reload: () => void
}
/** 
 * @var Error Responsible for handling errors
 * @returns A jsx component that shows the error
 * @event onClick Occurs when the user clicks on an element.
 */
const Error: React.FC<Props> = ({ error, reload }: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <span data-testid="error">{error}</span>
      <button data-testid="reload" onClick={reload}>Tentar novamente</button>
    </div>
  )
}

export default Error
