import axios from 'axios'

// -------------------------------------------------------------------------

export const clientAPI = axios.create({
  // baseURL: 'http://10.10.101.64:5000/api',
  baseURL: 'http://localhost:5000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
