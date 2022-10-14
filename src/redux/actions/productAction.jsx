import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/product')
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/product/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/product', body)
      console.log(data)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/product/${id}`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
