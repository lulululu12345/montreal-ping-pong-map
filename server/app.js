const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const tablesRouter = require('./controllers/tables')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info(`Connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error(`error connecting to MongoDB ${error.message}`)
  })

app.use(cors())
app.use(express.static('build'))

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/tables', tablesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app