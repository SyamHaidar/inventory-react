import { useRoutes } from 'react-router-dom'
// layout
import DashboardLayout from './layouts/dashboard'
// page
import Dashboard from './pages/dashboard/Dahsboard'
import Product from './pages/dashboard/Product'
import ProductDetail from './pages/dashboard/product/ProductDetail'
import Order from './pages/dashboard/Order'
import OrderDetail from './pages/dashboard/order/OrderDetail'
import Supplier from './pages/dashboard/Supplier'
import SupplierDetail from './pages/dashboard/supplier/SupplierDetail'
import User from './pages/dashboard/User'
import UserDetail from './pages/dashboard/user/UserDetail'
//
import Login from './pages/Login'
import NotFound from './pages/NotFound'

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // 404
    { path: '*', element: <NotFound /> },
    // login
    { path: '/', element: <Login /> },
    // main
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: 'product',
          children: [
            { index: true, element: <Product /> },
            // { path: 'detail', element: <ProductDetail /> },
            { path: ':id', element: <ProductDetail /> },
          ],
        },
        {
          path: 'order',
          children: [
            { index: true, element: <Order /> },
            { path: 'detail', element: <OrderDetail /> },
          ],
        },
        {
          path: 'supplier',
          children: [
            { index: true, element: <Supplier /> },
            { path: 'detail', element: <SupplierDetail /> },
          ],
        },
        {
          path: 'user',
          children: [
            { index: true, element: <User /> },
            { path: 'detail', element: <UserDetail /> },
          ],
        },
      ],
    },
  ])
}
