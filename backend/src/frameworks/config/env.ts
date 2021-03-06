/**
 * @property mongoUrl URL used to connect to mongoDB
 * @property host Force the application to run on the internal network of the operating system
 * @property port Port of your operating system that will be used to access the server
 */
export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/code-cipher',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 7777,
}
