import { createSlice } from '@reduxjs/toolkit'
import {
  createOrder,
  deleteOrder,
  editOrder,
  getOrder,
  getOrders,
  updateOrder,
} from '../actions/orderAction'

// -------------------------------------------------------------------------

const OrderReducer = createSlice({
  name: 'order',
  initialState: {
    data: '',
    detail: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getOrders.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- detail ----------
    [getOrder.pending]: (state) => {
      state.detail = ''
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- create ----------
    [createOrder.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
    },

    // ---------- edit ----------
    [editOrder.pending]: (state) => {
      state.detail = ''
    },
    [editOrder.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- update ----------
    [updateOrder.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- delete ----------
    [deleteOrder.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default OrderReducer.reducer
