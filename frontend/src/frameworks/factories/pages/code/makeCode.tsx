import { makeCodeValidation } from '@/frameworks/factories/pages'
import { makeRemoteAddCode } from '@/frameworks/factories/usecases'
import { Code } from '@/adapters/entries/pages'

import React from 'react'
/**
 * @var makeCode Calls the case use addCode on the code page and the validation of the inputs and returns this values
 */
export const makeCode: React.FC = () => {
  return (
    <Code
      addCode={makeRemoteAddCode()}
      validation={makeCodeValidation()}
    />
  )
}
