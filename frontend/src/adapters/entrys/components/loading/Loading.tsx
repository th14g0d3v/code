import Styles from './loadingStyles.scss'
import { Spinner } from '@/adapters/entrys/components'

import React from 'react'

const Loading: React.FC = () => {
  return (
    <div data-testid="loading" className={Styles.loadingWrap}>
      <div className={Styles.loading}>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </div>
    </div>
  )
}

export default Loading
