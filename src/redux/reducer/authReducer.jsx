import { createSlice } from '@reduxjs/toolkit'
import { authCheck, authSignin, authSignout } from '../actions/authAction'

// -------------------------------------------------------------------------

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    auth: '',
    loading: true,
  },
  reducers: {},
  extraReducers: {
    // ---------- auth check ----------
    [authCheck.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.auth = payload.auth
      state.loading = false
    },

    // ---------- sign in ----------
    [authSignin.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.auth = payload.auth
      state.loading = false
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
