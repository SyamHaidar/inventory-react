import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/supplier'

// get all supplier data
export const getSuppliers = createAsyncThunk(
  'supplier/getSuppliers',
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await api.get(args ? ROUTE + args : ROUTE)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get supplier detail by name
export const getSupplier = createAsyncThunk(
  'supplier/getSupplier',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ROUTE + `/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// create new supplier data
export const createSupplier = createAsyncThunk(
  'supplier/createSupplier',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post(ROUTE, body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get supplier detail by id for edit
export const editSupplier = createAsyncThunk(
  'supplier/editSupplier',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ROUTE + `/${id}/edit`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// update supplier data by id
export const updateSupplier = createAsyncThunk(
  'supplier/updateSupplier',
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(ROUTE + `/${id}/update`, body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// delete supplier data by id
export const deleteSupplier = createAsyncThunk(
  'supplier/deleteSupplier',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(ROUTE + `/${id}/delete`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
