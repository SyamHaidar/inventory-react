// component
import { Header, Page } from '../../components'
//
import OrderList from '../../sections/dashboard/order/OrderList'

// ----------------------------------------------------------------------

export default function Order() {
  return (
    <Page title="Order -">
      <Header title="Order" />
      <OrderList />
    </Page>
  )
}
