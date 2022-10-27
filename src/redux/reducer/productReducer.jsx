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
    data: '',
    detail: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getProducts.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- detail ----------
    [getProduct.pending]: (state) => {
      state.detail = ''
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- create ----------
    [createProduct.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
    },

    // ---------- edit ----------
    [editProduct.pending]: (state) => {
      state.detail = ''
    },
    [editProduct.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- update ----------
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- delete ----------
    [deleteProduct.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default productReducer.reducer
