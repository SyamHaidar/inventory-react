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
    isLoading: true,
    error: null,
    suppliers: [],
    supplier: null,
    startIndex: null,
    endIndex: null,
    totalRecords: null,
    totalPages: null,
    message: null,
  },
  extraReducers: {
    // ---------- get all ----------
    [getSuppliers.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getSuppliers.fulfilled]: (state, { payload }) => {
      state.suppliers = payload.data
      state.startIndex = payload.startIndex
      state.endIndex = payload.endIndex
      state.totalRecords = payload.totalRecords
      state.totalPages = payload.totalPages
      state.isLoading = false
    },
    [getSuppliers.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- detail ----------
    [getSupplier.pending]: (state) => {
      state.supplier = null
    },
    [getSupplier.fulfilled]: (state, { payload }) => {
      state.supplier = payload
    },
    [getSupplier.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- crate ----------
    [createSupplier.fulfilled]: (state, { payload }) => {
      state.message = null
    },
    [createSupplier.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [createSupplier.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- edit ----------
    [editSupplier.pending]: (state) => {
      state.supplier = null
    },
    [editSupplier.fulfilled]: (state, { payload }) => {
      state.supplier = payload
    },
    [editSupplier.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- update ----------
    [updateSupplier.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [updateSupplier.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- delete ----------
    [deleteSupplier.fulfilled]: (state, { payload: id }) => {
      state.suppliers = state.suppliers.filter((item) => item.id !== id)
    },
    [deleteSupplier.rejected]: (state, { payload }) => {
      state.error = payload.message
    },
  },
})

export default supplierReducer.reducer
