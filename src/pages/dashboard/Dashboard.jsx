import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Grid, Stack } from '../../style'
// component
import { Container, Header, Page } from '../../components'
// redux action
import { getProducts } from '../../redux/actions/productAction'
import { getOrders } from '../../redux/actions/orderAction'
import { getUsers } from '../../redux/actions/userAction'
//
import WidgetSummary from '../../sections/dashboard/WidgetSummary'
import WidgetProduct from '../../sections/dashboard/WidgetProduct'

// ----------------------------------------------------------------------

export default function Dashboard() {
  const products = useSelector((state) => state.product.data)
  const orders = useSelector((state) => state.order.data)
  const users = useSelector((state) => state.user.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getOrders())
    dispatch(getUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page title="Dashboard -">
      <Header title="Dashboard" />
      <Container sx={{ margin: '16px 0' }}>
        <Stack direction="column" spacing={16}>
          <Grid columns sm="2" lg="4" sx={{ marginBottom: '16px' }}>
            <WidgetSummary
              name="Order In"
              value="0"
              icon="arrow-left"
              color="green"
              iconSx={{ transform: ' rotate(-45deg)' }}
            />
            <WidgetSummary
              name="Order Out"
              value="0"
              icon="arrow-right"
              color="red"
              iconSx={{ transform: ' rotate(-45deg)' }}
            />
            <WidgetSummary name="Product" value={products.length} icon="box" color="yellow" />
            <WidgetSummary name="User" value={users.length} icon="users" color="cyan" />
          </Grid>

          {/* <WidgetProduct /> */}
        </Stack>
      </Container>
    </Page>
  )
}
