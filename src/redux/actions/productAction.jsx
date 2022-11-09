import { createAsyncThunk } from '@reduxjs/toolkit'
import { clientAPI as api } from '../../services/clientAPI'

// ----------------------------------------------------------------------

const ROUTE = '/product'

// get all product data
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await api.get(args ? ROUTE + args : ROUTE)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get product detail by name
export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ROUTE + `/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// create new product data
export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post(ROUTE, body)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// get product detail by id for edit
export const editProduct = createAsyncThunk(
  'product/editProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ROUTE + `/${id}/edit`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// update product data by id
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(ROUTE + `/${id}/update`, body)

      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

// delete product data by id
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(ROUTE + `/${id}/delete`)
      return id
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
