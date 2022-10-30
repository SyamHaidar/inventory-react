import { createSlice } from '@reduxjs/toolkit'
import {
  getUsers,
  getUser,
  createUser,
  editUser,
  updateUser,
  deleteUser,
  searchUsers,
} from '../actions/userAction'

// -------------------------------------------------------------------------

const userReducer = createSlice({
  name: 'user',
  initialState: {
    data: '',
    detail: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- search ----------
    [searchUsers.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- get all ----------
    [getUsers.fulfilled]: (state, { payload }) => {
      state.data = payload
    },

    // ---------- get detail ----------
    [getUser.pending]: (state) => {
      state.detail = ''
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- create ----------
    [createUser.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload]
    },

    // ---------- edit ----------
    [editUser.pending]: (state) => {
      state.detail = ''
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- update ----------
    [updateUser.fulfilled]: (state, { payload }) => {
      state.detail = payload
    },

    // ---------- delete ----------
    [deleteUser.fulfilled]: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export default userReducer.reducer
