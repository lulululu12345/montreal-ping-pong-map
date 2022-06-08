const app = require('./app')
const http = requiire('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const sever = http.createServer(app)

const PORT = config.PORT
console.log('port', PORT)
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})