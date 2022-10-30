import { createSlice } from '@reduxjs/toolkit'
import { authCheck, authSignin, authSignout } from '../actions/authAction'

// -------------------------------------------------------------------------

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    auth: '',
    loading: true,
    message: '',
  },
  reducers: {},
  extraReducers: {
    // ---------- auth check ----------
    [authCheck.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.auth = payload.auth
      state.loading = false
    },

    [authCheck.rejected]: (state, { payload }) => {
      state.user = ''
      state.auth = false
      state.loading = false
    },

    // ---------- sign in ----------
    [authSignin.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.auth = payload.auth
      state.loading = false
    },

    [authSignin.rejected]: (state, { payload }) => {
      state.user = payload.user
      state.auth = payload.auth
      state.loading = false
      state.message = payload.message
    },

    // ---------- sign out ----------
    [authSignout.fulfilled]: (state) => {
      state.user = ''
      state.auth = false
      state.loading = false
    },
  },
})

export default authReducer.reducer
