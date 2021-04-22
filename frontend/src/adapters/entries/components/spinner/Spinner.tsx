import Styles from './spinnerStyles.scss'

import React from 'react'
/**
 * @type Props Spinner properties
 * @property isNegative Checks whether the condition of the spinner is true or false
 */
type Props = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}
/**
 * @var Spinner A loading animation
 * @param isNegative Checks whether the page is loaded or not
 * @returns Show an animation
 */
const Spinner: React.FC<Props> = ({ isNegative, ...props }: Props) => {
  const negativeClass = isNegative ? Styles.negative : ''
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, negativeClass, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
