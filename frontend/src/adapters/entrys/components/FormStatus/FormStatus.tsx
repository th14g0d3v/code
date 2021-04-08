import Styles from './formStatusStyles.scss'
import { Spinner } from '@/adapters/entrys/components'

import React from 'react'

type Props = {
  state: any
}

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
