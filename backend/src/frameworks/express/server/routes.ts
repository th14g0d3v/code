import { Express, Router } from 'express'
import { readdirSync } from 'fs'
/**
 * @function default All routes are dynamically imported
 */
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
