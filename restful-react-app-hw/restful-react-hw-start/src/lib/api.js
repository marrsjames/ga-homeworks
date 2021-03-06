import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWine = (id) => {
  return axios.get(`${baseUrl}/wines/${id}`)
}

// AUTH METHODS
export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const postNewWine = (formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
  return axios.post(`${baseUrl}/wines`, formData, requestConfig)
}
