require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
const API_KEY = process.env.GOOGLE_MAPS_API_KEY
const MAP_ID = process.env.GOOGLE_MAPS_MAP_ID


module.exports = {
  MONGODB_URI,
  PORT,
  API_KEY,
  MAP_ID
}