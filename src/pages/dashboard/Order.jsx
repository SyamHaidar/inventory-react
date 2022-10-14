// style
import { Stack, Typography } from '../../style'
// component
import { Container, Header, Page } from '../../components'
//
import OrderModalAdd from '../../sections/dashboard/order/OrderModalAdd'
import OrderList from '../../sections/dashboard/order/OrderList'

// ----------------------------------------------------------------------

export default function Order() {
  return (
    <Page title="Order -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Typography
            as="h1"
            text="Order"
            size={20}
            weight="700"
            variant="primary"
            sx={{ padding: '18px 0' }}
          />
          <Stack direction="row" items="center" spacing={8}>
            <OrderModalAdd />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <OrderList />
      </Container>
    </Page>
  )
}
