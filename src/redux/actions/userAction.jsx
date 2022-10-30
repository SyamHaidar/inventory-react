import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/user'

// get all search product data
export const searchUsers = createAsyncThunk(
  'user/searchUsers',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ROUTE + `/search?name=${name}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get all user data
export const getUsers = createAsyncThunk('user/getUsers', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// get user detail by username
export const getUser = createAsyncThunk('user/getUser', async (username, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE + `/${username}`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// create new user data
export const createUser = createAsyncThunk('user/createUser', async (body, { rejectWithValue }) => {
  try {
    const { data } = await api.post(ROUTE, body)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// get user detail by id for edit
export const editUser = createAsyncThunk('user/editUser', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE + `/${id}/edit`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// update user data by id
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, body, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(ROUTE + `/${id}/update`, body)
      navigate(`/dashboard/user/@${data.username}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// delete user data by id
export const deleteUser = createAsyncThunk('user/deleteUser', async (id, { rejectWithValue }) => {
  try {
    await api.delete(ROUTE + `/${id}/delete`)
    return id
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
