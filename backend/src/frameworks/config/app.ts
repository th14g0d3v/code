import setupMiddlewares from '../express/server/middlewares'
import setupRoutes from '../express/server/routes'

import express from 'express'
/**
 * @var app Object conventionally denotes the Express application
 * @field setupMiddlewares Returns the middleware of the application
 * @field setupRoutes Returns an instance of a single route
 */
const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
