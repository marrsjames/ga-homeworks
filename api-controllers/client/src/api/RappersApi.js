import axios from 'axios'

export const getAllRappers = async () => {
  const options = { method: 'GET', url: '/api/rappers/' }

  const { data } = await axios.request(options)
  return data
}
