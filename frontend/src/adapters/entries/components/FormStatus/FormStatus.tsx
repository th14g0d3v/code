import Styles from './formStatusStyles.scss'
import { Spinner } from '@/adapters/entries/components'

import React from 'react'
/** 
 * @type Props State data for that react component
 * @property state Save state of a component
 */
type Props = {
  state: any
}
/**
 * @var FormStatus Is a Function that manages the state of the form
 * @param state Holds state data
 * @var isLoading Save page loading status
 * @var mainError Save the error status of the page
 * @returns Loading a page animation
 */
const FormStatus: React.FC<Props> = ({ state }: Props) => {
  const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span data-testid="main-error" className={Styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
