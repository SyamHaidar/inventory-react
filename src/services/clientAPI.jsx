import axios from 'axios'

// -------------------------------------------------------------------------

export const clientAPI = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://localhost:5000/api',
})
