const tablesRouter = require('express').Router()
const Table = require('../models/table')

tablesRouter.get('/', async (req, res) => {
  const tables = await Table.find({ verified: true })
  console.log('tables', tables)
  res.json(tables)
})

tablesRouter.post('/', async (req, res) => {
  const body = req.body

  const table = new Table({
    position: {
      lat: body.position.lat,
      lng: body.position.lng
    },
    numberOfTables: body.numberOfTables,
    location: body.location,
    payToPlay: body.payToPlay,
    description: body.description,
    verified: body.verified
  })

  const savedTable = await table.save()

  res.status(200).json(savedTable)
})

module.exports = tablesRouter