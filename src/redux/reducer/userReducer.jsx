import { createSlice } from '@reduxjs/toolkit'
import {
  getUsers,
  getUser,
  createUser,
  editUser,
  updateUser,
  deleteUser,
} from '../actions/userAction'

// -------------------------------------------------------------------------

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isLoading: true,
    error: null,
    users: [],
    user: {
      user: null,
      logs: [],
    },
    startIndex: null,
    endIndex: null,
    totalRecords: null,
    totalPages: null,
    message: null,
  },
  extraReducers: {
    // ---------- get all ----------
    [getUsers.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data
      state.startIndex = payload.startIndex
      state.endIndex = payload.endIndex
      state.totalRecords = payload.totalRecords
      state.totalPages = payload.totalPages
      state.isLoading = false
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- get detail ----------
    [getUser.pending]: (state) => {
      state.user.user = null
      state.user.logs = []
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user.user = payload.user
      state.user.logs = payload.log
    },
    [getUser.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- create ----------
    [createUser.fulfilled]: (state, { payload }) => {
      state.message = null
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [createUser.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- edit ----------
    [editUser.pending]: (state) => {
      state.user.user = null
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.user.user = payload
    },
    [editUser.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- update ----------
    [updateUser.fulfilled]: (state, { payload }) => {
      state.message = payload.message
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.error = payload.message
    },

    // ---------- delete ----------
    [deleteUser.fulfilled]: (state, { payload: id }) => {
      state.users = state.users.filter((item) => item.id !== id)
    },
  },
})

export default userReducer.reducer
