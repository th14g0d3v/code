import { mongoHelper as sut } from '@/frameworks/databases/mongodb'

describe('mongoHelper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let codeCollection = await sut.getCollection('codes')
    expect(codeCollection).toBeTruthy()
    await sut.disconnect()
    codeCollection = await sut.getCollection('codes')
    expect(codeCollection).toBeTruthy()
  })
})
