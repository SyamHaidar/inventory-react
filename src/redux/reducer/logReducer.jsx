import { createSlice } from '@reduxjs/toolkit'
import { searchLogs, getLogs } from '../actions/logAction'

// -------------------------------------------------------------------------

const logReducer = createSlice({
  name: 'log',
  initialState: {
    data: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- search ----------
    [searchLogs.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- get all ----------
    [getLogs.fulfilled]: (state, { payload }) => {
      state.data = payload
    },
  },
})

export default logReducer.reducer
