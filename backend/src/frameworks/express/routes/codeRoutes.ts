import { adaptRoute } from '@/frameworks/express/adapter'
import { makeCodeController } from '@/frameworks/factories'

import { Router } from 'express'
/**
 * @function default Way with the route will be manipulated
 * @param router Refers to the determination of how an application responds to a customer request for a specific endpoint, which is a URI (or path) and a specific HTTP request method such as a GET or POST
 */
export default (router: Router): void => {
  router.post('/code', adaptRoute(makeCodeController()))
}
