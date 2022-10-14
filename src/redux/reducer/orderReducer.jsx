import { createSlice } from '@reduxjs/toolkit'
import { createOrder, deleteOrder, getOrder, getOrders } from '../actions/OrderAction'

// -------------------------------------------------------------------------

const OrderReducer = createSlice({
  name: 'order',
  initialState: {
    order: {},
    orders: [],
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload
    },
    // ---------- get detail ----------
    [getOrder.fulfilled]: (state, { payload }) => {
      state.order = payload
    },
    // ---------- create ----------
    [createOrder.fulfilled]: (state, { payload }) => {
      state.orders = [...state.orders, payload]
    },
    // ---------- delete ----------
    [deleteOrder.fulfilled]: (state, { payload: id }) => {
      state.loading = false
      state.orders = state.orders.filter((item) => item.id !== id)
    },
  },
})

export default OrderReducer.reducer
