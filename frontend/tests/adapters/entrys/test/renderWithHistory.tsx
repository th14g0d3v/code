import { TCodeModel } from '@/core/models'
import { mockAddCodeModel } from '@/tests/core/test'
import { currentCodeState } from '@/adapters/entries/components'

import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { MutableSnapshot, RecoilRoot, RecoilState } from 'recoil'
import React from 'react'

type TParam = {
  Page: React.FC
  history: MemoryHistory
  code?: TCodeModel
  states?: Array<{ atom: RecoilState<any>, value: any }>
}

type TReturn = {
  setCurrentCodeMock: (code: TCodeModel) => void
}

export const renderWithHistory = ({ Page, history, code = mockAddCodeModel(), states = [] }: TParam): TReturn => {
  const setCurrentCodeMock = jest.fn()
  const mockedState = {
    setCurrentCode: setCurrentCodeMock,
    getCurrentCode: () => code
  }
  const initializeState = ({ set }: MutableSnapshot): void => {
    [...states, { atom: currentCodeState, value: mockedState }].forEach(state => set(state.atom, state.value))
  }
  render(
    <RecoilRoot initializeState={initializeState}>
      <Router history={history}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return {
    setCurrentCodeMock
  }
}
