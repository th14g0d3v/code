import { adaptRoute } from '@/frameworks/express/adapter'
import { makeCodeController } from '@/frameworks/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/code', adaptRoute(makeCodeController()))
}
