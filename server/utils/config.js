require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
const API_KEY = process.env.API_KEY


module.exports = {
  MONGODB_URI,
  PORT,
  API_KEY
}