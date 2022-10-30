import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/auth'

// get auth to get user data if user has logged in
export const authCheck = createAsyncThunk('auth/getAuth', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// user sign in
export const authSignin = createAsyncThunk(
  'auth/SignIn',
  async ({ body, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.post(ROUTE + '/signin', body)
      navigate('/dashboard')
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// user sign out
export const authSignout = createAsyncThunk('auth/SignOut', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.post(ROUTE + '/signout')
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
