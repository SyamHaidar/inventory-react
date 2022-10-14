import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

export const getOrders = createAsyncThunk('order/getOrders', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/order')
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

export const getOrder = createAsyncThunk('order/getOrder', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(`/order/${id}`)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/order', body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/order/${id}`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
