import { useRoutes } from 'react-router-dom'
// layout
import DashboardLayout from './layouts/dashboard'
// page
import Dashboard from './pages/dashboard/Dashboard'
import Product from './pages/dashboard/Product'
import Order from './pages/dashboard/Order'
import OrderDetail from './pages/dashboard/order/OrderDetail'
import Supplier from './pages/dashboard/Supplier'
import User from './pages/dashboard/User'
import UserEdit from './pages/dashboard/user/UserEdit'
import Log from './pages/dashboard/Log'
//
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import SupplierEdit from './pages/dashboard/supplier/SupplierEdit'

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Login /> },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: 'product',
          children: [{ index: true, element: <Product /> }],
        },
        {
          path: 'order',
          children: [
            { index: true, element: <Order /> },
            { path: 'invoice/:invoice', element: <OrderDetail /> },
          ],
        },
        {
          path: 'supplier',
          children: [
            { index: true, element: <Supplier /> },
            { path: ':id/edit', element: <SupplierEdit /> },
          ],
        },
        {
          path: 'user',
          children: [
            { index: true, element: <User /> },
            { path: ':id/edit', element: <UserEdit /> },
          ],
        },
        { path: 'log', element: <Log /> },
      ],
    },
  ])
}
