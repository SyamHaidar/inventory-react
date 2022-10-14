import { configureStore } from '@reduxjs/toolkit'
// api
// import { clientAPI } from '../../services/clientAPI'
// reducer
import authReducer from '../reducer/authReducer'
import productReducer from '../reducer/productReducer'
import supplierReducer from '../reducer/supplierReducer'

// -------------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    supplier: supplierReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: clientAPI,
  //     },
  //     serializableCheck: false,
  //   }),
})
