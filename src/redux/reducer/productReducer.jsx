import { createSlice } from '@reduxjs/toolkit'
import { createProduct, deleteProduct, getProduct, getProducts } from '../actions/productAction'

// -------------------------------------------------------------------------

const productReducer = createSlice({
  name: 'product',
  initialState: {
    data: [],
    detail: {},
    success: false,
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getProducts.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.success = true
    },
    // ---------- get detail ----------
    [getProduct.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },
    // ---------- create ----------
    [createProduct.pending]: (state) => {
      state.success = false
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
      state.success = true
    },
    [createProduct.rejected]: (state) => {
      state.success = false
    },
    // ---------- delete ----------
    [deleteProduct.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default productReducer.reducer
