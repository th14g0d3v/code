import 'module-alias/register'
import env from '@/frameworks/config/env'
import { mongoHelper } from '@/frameworks/databases/mongodb'

mongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(Number(env.port), env.host, () => console.log(`Server running with API at http://localhost:${env.port}/api/code`))
  })
  .catch(console.error)
