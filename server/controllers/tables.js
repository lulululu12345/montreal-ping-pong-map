const tablesRouter = require('express').Router()
const Table = require('../models/table')

tablesRouter.post('/', async (req, res) => {
  const body = req.body

  const table = new Table({
    position: {
      lat: body.position.lat,
      lng: body.position.lng
    },
    numberOfTables: body.numberOfTables,
    location: body.location,
    windProtection: body.windProtection,
    verified: body.verified
  })

  const savedTable = await table.save()

  res.status(200).json(savedTable)
})

module.exports = tablesRouter