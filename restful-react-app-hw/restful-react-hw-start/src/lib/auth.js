export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

// eslint-disable-next-line no-unused-vars
export const getToken = (token) => {
  return window.localStorage.getItem('token')
}