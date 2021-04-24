import 'module-alias/register'
import env from '@/frameworks/config/env'
import { mongoHelper } from '@/frameworks/databases/mongodb'
/**
 * This is the gateway to the application that is only opened when the connection to mongoDB is established
 */
mongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(Number(env.port), env.host, () => console.log(`Server running with API at http://localhost:${env.port}/api`))
  })
  .catch(console.error)
