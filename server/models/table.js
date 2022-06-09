const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
  position: {
    lat: Number,
    lng: Number
  },
  numberOfTables: Number,
  location: String,
  windProtection: String,
  verified: Boolean
})

tableSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Table', tableSchema)