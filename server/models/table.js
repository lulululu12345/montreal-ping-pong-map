const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
  location: {
    lat: Number,
    lng: Number
  },
  numberOfTables: Number,
  
})

tableSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})