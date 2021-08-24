import axios from 'axios'

const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}
