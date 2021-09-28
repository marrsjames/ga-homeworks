import axios from 'axios' 

export const getAllColours = async () => {
  const options = { method: 'GET', url: '/api/colours' }

  const { data } = await axios.request(options)
  return data
}

// export const getAllColours = async () => {
//   const { data } = await axios.get(`/api/colours`)
//   return data
// }

export const getSingleColour = (id) => {
  // const options = { method: 'GET', url: `/api/colours/${id}` }

  return axios.get(`/api/colours/${id}`)
  // const { data } = axios.request(options)
  // return data
}

export const deleteColour = (id) => {
  const options = {
    method: 'DELETE',
    url: `/api/colours/${id}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjOGEzZjAxZTkxNTQyNjZmMjM4YWEiLCJpYXQiOjE2MzI3MzkzOTYsImV4cCI6MTYzMjc4MjU5Nn0.1uylciEuImurpuCQn9NFL5lztwhQDHLKCRtT677IvdQ',
    },
  }

  return axios(options)
}

export const createColour = (formData) => {
  const options = {
    method: 'POST',
    data: formData,
    url: '/api/colours',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjOGEzZjAxZTkxNTQyNjZmMjM4YWEiLCJpYXQiOjE2MzI3MzkzOTYsImV4cCI6MTYzMjc4MjU5Nn0.1uylciEuImurpuCQn9NFL5lztwhQDHLKCRtT677IvdQ',
    },
  }

  return axios(options)
}

export const editColour = (id, formData) => {
  const options = {
    method: 'PUT',
    data: formData,
    url: `/api/colours/${id}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjOGEzZjAxZTkxNTQyNjZmMjM4YWEiLCJpYXQiOjE2MzI3MzkzOTYsImV4cCI6MTYzMjc4MjU5Nn0.1uylciEuImurpuCQn9NFL5lztwhQDHLKCRtT677IvdQ',
    },
  }

  return axios(options)

}