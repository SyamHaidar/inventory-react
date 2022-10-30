import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// style
import { Box, Stack, TableCell, TableRow, theme, Typography } from '../../../style'
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
    { name: 'Status', align: 'center' },
    { name: '' },
  ]

  return (
    <TableList search="Search order..." label={label} data={order}>
      {orderData.map((order, index) => (
        <TableRow hover key={order.id}>
          <TableCell padding="checkbox">{index + 1}</TableCell>
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
                  color: theme.color.text.contrast,
                  height: '40px',
                  width: '40px',
                  fontSize: '15px',
                  fontWeight: '700',
                }}
              >
                <Typography as="h4" text={initialName(order.supplier.name)} noWrap />
              </Box>
              <Box>
                <Typography
                  as="div"
                  text={order.supplier.name}
                  weight="500"
                  variant="primary"
                  noWrap
                />
                <Typography text={order.invoice} variant="secondary" noWrap />
              </Box>
            </Stack>
          </TableCell>
          <TableCell>
            <Typography text={moment.unix(order.date).format('DD MMM Y')} noWrap />
          </TableCell>
          <TableCell>{order.quantity}</TableCell>
          <TableCell sx={{ textAlign: 'center' }}>
            <Typography
              text={order.status ? 'IN' : 'OUT'}
              weight="700"
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '24px',
                width: '52px',
                borderRadius: theme.size.rounded.small,
                textTransform: 'uppercase',
                backgroundColor:
                  (order.status === true && `${theme.color.green.main}14`) ||
                  (order.status === false && `${theme.color.red.main}14`),
                color:
                  (order.status === true && `${theme.color.green.main}`) ||
                  (order.status === false && `${theme.color.red.main}`),
              }}
            />
          </TableCell>
          <TableCell padding="more" sx={{ textAlign: 'right' }}>
            <TableListMoreMenu
              id={order.id}
              edit="supplier"
              deleteAction={deleteOrder(order.id)}
              editModal
            />
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  )
}
