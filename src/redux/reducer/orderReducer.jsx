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
    isLoading: true,
    error: null,
    orders: [],
    order: null,
    startIndex: null,
    endIndex: null,
    totalRecords: null,
    totalPages: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getOrders.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload.data
      state.startIndex = payload.startIndex
      state.endIndex = payload.endIndex
      state.totalRecords = payload.totalRecords
      state.totalPages = payload.totalPages
      state.isLoading = false
    },
    [getOrders.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- detail ----------
    [getOrder.pending]: (state) => {
      state.order = null
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.order = payload
    },
    [getOrder.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- create ----------
    [createOrder.fulfilled]: (state, { payload }) => {
      state.message = null
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- edit ----------
    [editOrder.pending]: (state) => {
      state.order = null
    },
    [editOrder.fulfilled]: (state, { payload }) => {
      state.order = payload
    },
    [editOrder.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- update ----------
    [updateOrder.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [updateOrder.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- delete ----------
    [deleteOrder.fulfilled]: (state, { payload: id }) => {
      state.orders = state.orders.filter((item) => item.id !== id)
    },
    [deleteOrder.rejected]: (state, { payload }) => {
      state.error = payload.message
    },
  },
})

export default OrderReducer.reducer
