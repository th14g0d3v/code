export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/code-cipher',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 7777,
}
