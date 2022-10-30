// component
import { Header, Page } from '../../components'
//
import SupplierList from '../../sections/dashboard/supplier/SupplierList'

// ----------------------------------------------------------------------

export default function Supplier() {
  return (
    <Page title="Supplier -">
      <Header title="Supplier" />
      <SupplierList />
    </Page>
  )
}
