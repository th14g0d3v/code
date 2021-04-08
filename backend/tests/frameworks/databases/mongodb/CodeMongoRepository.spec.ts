import { CodeMongoRepository, mongoHelper } from '@/frameworks/databases/mongodb'
import { mockAddCodeParam } from '@/tests/core/mocks'

import { Collection } from 'mongodb'

const makeSut = (): CodeMongoRepository => {
  return new CodeMongoRepository()
}

let codeCollection: Collection

describe('CodeMongoRepository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    codeCollection = await mongoHelper.getCollection('codes')
    await codeCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should return a code on success', async () => {
      const sut = makeSut()
      const addCodeParam = mockAddCodeParam()
      const code = await sut.add(addCodeParam)
      expect(code).toBeTruthy()
      expect(code.id).toBeTruthy()
      expect(code.code).toBe(addCodeParam.code)
    })
  })
})
