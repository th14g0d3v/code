import { IGetStorage } from '@/adapters/datas/interfaces/cache'

import faker from 'faker'

export class GetStorageSpy implements IGetStorage {
  key: string
  value: any = faker.random.objectElement()

  get (key: string): any {
    this.key = key
    return this.value
  }
}
