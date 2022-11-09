import { createSlice } from '@reduxjs/toolkit'
import { getLogs } from '../actions/logAction'

// -------------------------------------------------------------------------

const logReducer = createSlice({
  name: 'log',
  initialState: {
    isLoading: true,
    error: null,
    logs: [],
    startIndex: null,
    endIndex: null,
    totalRecords: null,
    totalPages: null,
  },
  extraReducers: {
    // ---------- get all ----------
    [getLogs.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getLogs.fulfilled]: (state, { payload }) => {
      state.logs = payload.data
      state.startIndex = payload.startIndex
      state.endIndex = payload.endIndex
      state.totalRecords = payload.totalRecords
      state.totalPages = payload.totalPages
      state.isLoading = false
    },
  },
})

export default logReducer.reducer
