import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

export const getSuppliers = createAsyncThunk(
  'supplier/getSuppliers',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/supplier')
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getSupplier = createAsyncThunk(
  'supplier/getSupplier',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/supplier/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const createSupplier = createAsyncThunk(
  'supplier/createSupplier',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/supplier', body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteSupplier = createAsyncThunk(
  'supplier/deleteSupplier',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/supplier/${id}`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
