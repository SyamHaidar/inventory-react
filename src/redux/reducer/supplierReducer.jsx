import { createSlice } from '@reduxjs/toolkit'
import {
  createSupplier,
  deleteSupplier,
  getSupplier,
  getSuppliers,
} from '../actions/supplierAction'

// -------------------------------------------------------------------------

const supplierReducer = createSlice({
  name: 'supplier',
  initialState: {
    data: [],
    detail: {},
    success: false,
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getSuppliers.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.success = true
    },
    // ---------- get detail ----------
    [getSupplier.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },
    // ---------- create ----------
    [createSupplier.pending]: (state) => {
      state.success = false
    },
    [createSupplier.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
      state.success = true
    },
    [createSupplier.rejected]: (state) => {
      state.success = false
    },
    // ---------- delete ----------
    [deleteSupplier.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default supplierReducer.reducer
