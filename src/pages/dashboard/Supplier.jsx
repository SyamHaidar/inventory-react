// component
import { Container, Header, Page } from '../../components'
//
import SupplierList from '../../sections/dashboard/supplier/SupplierList'

// ----------------------------------------------------------------------

export default function Supplier() {
  return (
    <Page title="Supplier -">
      <Header title="Supplier" />
      <Container sx={{ margin: '16px 0' }}>
        <SupplierList />
      </Container>
    </Page>
  )
}
