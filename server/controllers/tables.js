const tablesRouter = require('express').Router()
const Table = require('../models/table')

tablesRouter.post('/', async (req, res) => {
  const body = req.body
  console.log('body', body)
  res.status(200).end()
})

module.exports = tablesRouter