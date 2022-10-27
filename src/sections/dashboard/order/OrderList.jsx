import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// style
import { Box, Checkbox, Stack, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteOrder, getOrders } from '../../../redux/actions/orderAction'
// util
import { initialName } from '../../../utils'

// ----------------------------------------------------------------------

export default function OrderList() {
  const order = useSelector((state) => state.order.data)
  const dispatch = useDispatch()

  // sort data by latest add
  const orderArray = [...order]
  const orderData = orderArray.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))

  useEffect(() => {
    dispatch(getOrders())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const label = [
    { name: 'Invoice' },
    { name: 'Date' },
    { name: 'Quantity' },
    { name: 'Status' },
    { name: '' },
  ]

  return (
    <TableList label={label} data={order}>
      {orderData.map((order) => (
        <TableRow hover key={order.id}>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>
            <Stack
              as={Link}
              to={`/dashboard/order/invoice/${encodeURIComponent(order.invoice)}`}
              direction="row"
              items="center"
              spacing={16}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.color.brand.main,
                  borderRadius: theme.size.rounded.full,
                  height: '40px',
                  width: '40px',
                  fontSize: '15px',
                  fontWeight: '700',
                }}
              >
                <Typography
                  as="h4"
                  text={initialName(order.supplier.name)}
                  variant="primary"
                  noWrap
                />
              </Box>
              <Box>
                <Typography
                  as="div"
                  text={order.supplier.name}
                  size={14}
                  weight="500"
                  variant="primary"
                  noWrap
                />
                <Typography text={order.invoice} size={14} noWrap />
              </Box>
            </Stack>
          </TableCell>
          <TableCell>{moment.unix(order.date).format('DD MMM Y')}</TableCell>
          <TableCell>{order.quantity}</TableCell>
          <TableCell>
            <Box
              sx={{
                display: 'inline-flex',
                padding: '2px 8px',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: theme.size.rounded.small,
                backgroundColor:
                  (order.status === true && `${theme.color.green.main}14`) ||
                  (order.status === false && `${theme.color.red.main}14`),
                color:
                  (order.status === true && `${theme.color.green.main}`) ||
                  (order.status === false && `${theme.color.red.main}`),
              }}
            >
              {order.status ? 'Order In' : 'Order Out'}
            </Box>
          </TableCell>
          <TableCell padding="more" sx={{ textAlign: 'right' }}>
            <TableListMoreMenu id={order.id} edit="supplier" deleteAction={deleteOrder(order.id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  )
}
