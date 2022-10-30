import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/log'

// get all search log data
export const searchLogs = createAsyncThunk('log/searchLogs', async (name, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE + `/search?name=${name}`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// get all log data
export const getLogs = createAsyncThunk('log/getLogs', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
