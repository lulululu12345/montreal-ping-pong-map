import axios from 'axios'
const baseUrl = 'http://locahost:3001/api/tables'

const add = async (newObject) => {
  const res = await axios.post(baseUrl, newObject)
  return res
}

export default { add }