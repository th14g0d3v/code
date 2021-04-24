import { bodyParser, cors, contentType, noCache } from '@/frameworks/express/middlewares'

import { Express } from 'express'
/**
 * @function default Defines all middleware for the application
 */
export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use(noCache)
}
