// component
import { Container, Header, Page } from '../../components'
//
import OrderList from '../../sections/dashboard/order/OrderList'

// ----------------------------------------------------------------------

export default function Order() {
  return (
    <Page title="Order -">
      <Header title="Order" />
      <Container sx={{ margin: '16px 0' }}>
        <OrderList />
      </Container>
    </Page>
  )
}
