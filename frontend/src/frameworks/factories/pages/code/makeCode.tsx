import { makeCodeValidation } from '@/frameworks/factories/pages'
import { makeRemoteAddCode } from '@/frameworks/factories/usecases'
import { Code } from '@/adapters/entrys/pages'

import React from 'react'

export const makeCode: React.FC = () => {
  return (
    <Code
      addCode={makeRemoteAddCode()}
      validation={makeCodeValidation()}
    />
  )
}
