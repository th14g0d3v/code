import { makeCode } from '@/frameworks/factories/pages'
import { setCurrentCodeAdapter, getCurrentCodeAdapter } from '@/frameworks/cache'
import { currentCodeState } from '@/adapters/entrys/components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  const state = {
    setCurrentCode: setCurrentCodeAdapter,
    getCurrentCode: getCurrentCodeAdapter
  }
  return (
    <RecoilRoot initializeState={({ set }) => set(currentCodeState, state)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeCode} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
