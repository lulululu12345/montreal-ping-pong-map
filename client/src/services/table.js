import axios from 'axios'
const baseUrl = '/api/tables'

const add = async (newObject) => {
  const res = await axios.post(baseUrl, newObject)
  return res
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res
}
export default { add, getAll }