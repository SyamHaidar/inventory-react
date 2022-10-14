import { createSlice } from '@reduxjs/toolkit'
import { createUser, deleteUser, getUser, getUsers } from '../actions/userAction'

// -------------------------------------------------------------------------

const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // ---------- get all ----------
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload
      state.loading = false
    },
    // ---------- get detail ----------
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.loading = false
    },
    // ---------- create ----------
    [createUser.fulfilled]: (state, { payload }) => {
      state.user = [payload]
    },
    // ---------- delete ----------
    [deleteUser.fulfilled]: (state, { payload: id }) => {
      state.loading = false
      state.users = state.users.filter((item) => item.id !== id)
    },
  },
})

export default userReducer.reducer
