import setupMiddlewares from '../express/server/middlewares'
import setupRoutes from '../express/server/routes'

import express from 'express'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
