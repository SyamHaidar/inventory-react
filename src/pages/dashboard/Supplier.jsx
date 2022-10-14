// style
import { Stack, Typography } from '../../style'
// component
import { Container, Header, Page } from '../../components'
//
import SupplierModalAdd from '../../sections/dashboard/supplier/SupplierModalAdd'
import SupplierList from '../../sections/dashboard/supplier/SupplierList'

// ----------------------------------------------------------------------

export default function Supplier() {
  return (
    <Page title="Supplier -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Typography
            as="h1"
            text="Supplier"
            size={20}
            weight="700"
            variant="primary"
            sx={{ padding: '18px 0' }}
          />
          <Stack direction="row" items="center" spacing={8}>
            <SupplierModalAdd />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <SupplierList />
      </Container>
    </Page>
  )
}
