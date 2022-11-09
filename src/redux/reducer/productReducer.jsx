import { createSlice } from '@reduxjs/toolkit'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  editProduct,
  updateProduct,
} from '../actions/productAction'

// -------------------------------------------------------------------------

const productReducer = createSlice({
  name: 'product',
  initialState: {
    isLoading: true,
    error: null,
    products: [],
    product: null,
    startIndex: null,
    endIndex: null,
    totalRecords: null,
    totalPages: null,
    message: null,
  },
  extraReducers: {
    // ---------- get all ----------
    [getProducts.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.data
      state.startIndex = payload.startIndex
      state.endIndex = payload.endIndex
      state.totalRecords = payload.totalRecords
      state.totalPages = payload.totalPages
      state.isLoading = false
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- detail ----------
    [getProduct.pending]: (state, { payload }) => {
      state.product = null
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.product = payload
    },
    [getProduct.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- create ----------
    [createProduct.fulfilled]: (state, { payload }) => {
      state.message = null
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [createProduct.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- edit ----------
    [editProduct.pending]: (state) => {
      state.product = null
    },
    [editProduct.fulfilled]: (state, { payload }) => {
      state.product = payload
    },
    [editProduct.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- update ----------
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [updateProduct.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- delete ----------
    [deleteProduct.fulfilled]: (state, { payload: id }) => {
      state.products = state.products.filter((item) => item.id !== id)
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.error = payload.message
    },
  },
})

export default productReducer.reducer
