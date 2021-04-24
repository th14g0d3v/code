import { MongoClient, Collection } from 'mongodb'
/**
 * @var mongoHelper Responsible for connection activities and database operations
 */
export const mongoHelper = {
  client: null as MongoClient,
  uri: null as string,
  /**
   * @method connect Connects to the database
   * @param uri Used to connect to mongoDB
   */
  async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  /**
   * @method disconnect Disconnects the mongoDB application
   */
  async disconnect(): Promise<void> {
    await this.client.close()
    this.client = null
  },

  /**
   * @method getCollection Checks whether you are connected to mongoDB and manipulate collections
   * @param name Collection name
   */
  async getCollection(name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },
  /**
   * @method map This feature only removes the underscore from the _id field which is a default of mongoDB
   */
  map: (data: any): any => {
    const { _id, ...rest } = data
    return { ...rest, id: _id }
  }
}
