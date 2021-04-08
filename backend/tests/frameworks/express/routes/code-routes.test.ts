import app from '@/frameworks/config/app'
import { mongoHelper } from '@/frameworks/databases/mongodb'

import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection

describe('Code Routes', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await mongoHelper.getCollection('codes')
    await accountCollection.deleteMany({})
  })

  describe('POST /code', () => {
    test('Should return 200 on code', async () => {
      await request(app)
        .post('/api/code')
        .send({
          code: '1a2b3c4d5e'
        })
        .expect(200)
        await request(app)
          .post('/api/codes')
          .send({
            code: '1a2b3c4d5e'
          })
          .expect(404)
    })
  })
})
