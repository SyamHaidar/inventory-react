import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

export const getUsers = createAsyncThunk('user/getUsers', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/user')
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

export const getUser = createAsyncThunk('user/getUser', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(`/user/${id}`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

export const createUser = createAsyncThunk('user/createUser', async (body, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/user', body)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/user/${id}`)
    return id
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
