import { makeCode } from '@/frameworks/factories/pages'
import { setCurrentCodeAdapter, getCurrentCodeAdapter } from '@/frameworks/cache'
import { currentCodeState } from '@/adapters/entries/components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'
/**
 * @var Router is a collection of navigational components
 * @field BrowserRouter component that is used for doing client side routing with URL segments
 * @field Switch component will only render the first route that matches/includes the path
 * @returns Route The route that will use a path where to load the code page data to the server
 */
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
