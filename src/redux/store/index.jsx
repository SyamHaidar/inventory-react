import { configureStore } from '@reduxjs/toolkit'
// api
// import { clientAPI } from '../../services/clientAPI'
// reducer
import authReducer from '../reducer/authReducer'
import productReducer from '../reducer/productReducer'
import supplierReducer from '../reducer/supplierReducer'
import orderReducer from '../reducer/orderReducer'
import userReducer from '../reducer/userReducer'

// -------------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    supplier: supplierReducer,
    order: orderReducer,
    user: userReducer,
  },
})
