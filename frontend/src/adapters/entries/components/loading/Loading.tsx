import Styles from './loadingStyles.scss'
import { Spinner } from '@/adapters/entries/components'

import React from 'react'
/** 
 * @var Loading This component is shown only when the application takes a long time to load the interface on the screen
 */
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
