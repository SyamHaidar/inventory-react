import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/log'

// get all log data
export const getLogs = createAsyncThunk('log/getLogs', async (args, { rejectWithValue }) => {
  try {
    const { data } = await api.get(args ? ROUTE + args : ROUTE)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
