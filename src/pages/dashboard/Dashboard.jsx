import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Card, Divider, Stack } from '../../style'
// component
import { Container, Header, Page, Scrollbar } from '../../components'
// redux action
import { getProducts } from '../../redux/actions/productAction'
import { getOrders } from '../../redux/actions/orderAction'
import { getSuppliers } from '../../redux/actions/supplierAction'
import { getUsers } from '../../redux/actions/userAction'
//
import WidgetSummary from '../../sections/dashboard/WidgetSummary'
import WidgetProduct from '../../sections/dashboard/WidgetProduct'
import WidgetSupplier from '../../sections/dashboard/WidgetSupplier'
import WidgetUser from '../../sections/dashboard/WidgetUser'

// ----------------------------------------------------------------------

export default function Dashboard() {
  const products = useSelector((state) => state.product)
  const orders = useSelector((state) => state.order)
  const users = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getOrders())
    dispatch(getSuppliers())
    dispatch(getUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page title="Dashboard -">
      <Header title="Dashboard" />
      <Container
        sx={{ padding: '0 16px 80px', '@media (min-width:576px)': { padding: '0 16px 16px' } }}
      >
        <Stack direction="column" spacing={40}>
          <Card>
            <Scrollbar>
              <Stack direction="row" items="center" spacing={16} sx={{ padding: '24px 0' }}>
                <WidgetSummary
                  name="Order In"
                  value={orders.totalRecords}
                  icon="arrow-left"
                  color="green"
                  iconSx={{ transform: ' rotate(-45deg)' }}
                />
                <Divider orientation="vertical" sx={{ borderStyle: 'dashed!important' }} />
                <WidgetSummary
                  name="Order Out"
                  value="0"
                  icon="arrow-right"
                  color="red"
                  iconSx={{ transform: ' rotate(-45deg)' }}
                />
                <Divider orientation="vertical" sx={{ borderStyle: 'dashed!important' }} />
                <WidgetSummary
                  name="Product"
                  value={products.totalRecords}
                  icon="box"
                  color="yellow"
                />
                <Divider orientation="vertical" sx={{ borderStyle: 'dashed!important' }} />
                <WidgetSummary name="User" value={users.totalRecords} icon="users" color="cyan" />
              </Stack>
            </Scrollbar>
          </Card>

          <WidgetProduct />
          <WidgetSupplier />
          <WidgetUser />
        </Stack>
      </Container>
    </Page>
  )
}
