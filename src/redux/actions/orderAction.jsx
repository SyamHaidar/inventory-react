import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/order'

// get all order data
export const getOrders = createAsyncThunk('order/getOrders', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// get order detail by id
export const getOrder = createAsyncThunk('order/getOrder', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE + `/invoice?id=${id}`)
    console.log(data)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// create new order data
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post(ROUTE, body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get order detail by id for edit
export const editOrder = createAsyncThunk('order/editOrder', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(ROUTE + `/${id}/edit`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// update order data by id
export const updateOrder = createAsyncThunk(
  'order/updateOrder',
  async ({ id, body, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(ROUTE + `/${id}/update`, body)
      navigate(`/dashboard/order/invoice/${encodeURIComponent(data.invoice)}`, { replace: true })
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// delete order data by id
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(ROUTE + `/${id}/delete`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
