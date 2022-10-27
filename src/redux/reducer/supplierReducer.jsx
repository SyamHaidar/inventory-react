import { createSlice } from '@reduxjs/toolkit'
import {
  createSupplier,
  deleteSupplier,
  editSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
} from '../actions/supplierAction'

// -------------------------------------------------------------------------

const supplierReducer = createSlice({
  name: 'supplier',
  initialState: {
    data: '',
    detail: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getSuppliers.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- detail ----------
    [getSupplier.pending]: (state) => {
      state.detail = ''
    },
    [getSupplier.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- crate ----------
    [createSupplier.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
    },

    // ---------- edit ----------
    [editSupplier.pending]: (state) => {
      state.detail = ''
    },
    [editSupplier.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- update ----------
    [updateSupplier.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- delete ----------
    [deleteSupplier.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default supplierReducer.reducer
