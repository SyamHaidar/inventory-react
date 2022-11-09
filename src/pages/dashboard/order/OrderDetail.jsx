import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
// style
import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { Container, Logo, Header, Page, Spinner, Scrollbar } from '../../../components'
// redux action
import { getOrder } from '../../../redux/actions/orderAction'

// ----------------------------------------------------------------------

const InvoiceWGS = () => (
  <>
    <Typography text="Walden Global Services (WGS)" size={14} variant="primary" />
    <Typography
      text="Jl. Soekarno Hatta No.104, Kota Bandung, Jawa Barat 40223"
      size={14}
      variant="primary"
    />
    <Typography text="0226034882" size={14} variant="primary" />
  </>
)

const InvoiceOther = ({ order }) => (
  <>
    <Typography text={order.supplier.name} size={14} variant="primary" />
    <Typography
      text={`${order.supplier.address}, ${order.supplier.location}`}
      size={14}
      variant="primary"
    />
    <Typography text={order.supplier.mobile} size={14} variant="primary" />
  </>
)

export default function OrderDetail() {
  const { order } = useSelector((state) => state.order)
  const dispatch = useDispatch()

  const { invoice } = useParams()

  useEffect(() => {
    dispatch(getOrder(invoice))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoice])

  return !order ? (
    <Spinner />
  ) : (
    <Page title="Invoice -">
      <Header title="Invoice" goBack />
      <Container
        sx={{ padding: '0 16px 80px', '@media (min-width:576px)': { padding: '0 16px 16px' } }}
      >
        <Card sx={{ padding: '32px' }}>
          <Stack direction="column" spacing={40}>
            <Grid>
              <Box sx={{ marginBottom: '40px' }}>
                <Logo />
              </Box>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
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
                    margin: '0 auto 8px 0',
                    '@media (min-width:768px)': {
                      margin: '0 0 8px auto',
                    },
                  }}
                />
                <Typography
                  text={order.invoice}
                  weight="500"
                  variant="primary"
                  sx={{
                    '@media (min-width:768px)': {
                      textAlign: 'right',
                    },
                  }}
                />
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography text="FROM" size={12} weight="700" sx={{ marginBottom: '16px' }} />
                {!order.status ? <InvoiceWGS /> : <InvoiceOther order={order} />}
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography text="TO" size={12} weight="700" sx={{ marginBottom: '16px' }} />
                {order.status ? <InvoiceWGS /> : <InvoiceOther order={order} />}
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography
                  text="DATE CREATE"
                  size={12}
                  weight="700"
                  sx={{ marginBottom: '16px' }}
                />
                <Typography
                  text={moment.unix(order.date).format('DD MMMM Y')}
                  size={14}
                  variant="primary"
                />
              </Stack>
            </Grid>

            <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      borderTop: `1px solid ${theme.color.border}`,
                      borderBottom: `1px solid ${theme.color.border}`,
                      textAlign: 'left',
                      color: theme.color.text.primary,
                    }}
                  >
                    <TableCell as="th" padding="checkbox">
                      #
                    </TableCell>
                    <TableCell as="th">Product</TableCell>
                    <TableCell as="th">Qty</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell padding="checkbox">1</TableCell>
                    <TableCell as="th">
                      <Stack
                        as={Link}
                        to={`/dashboard/product/${order.product.slug}`}
                        direction="row"
                        items="center"
                        spacing={16}
                      >
                        <Avatar
                          src={`/static/products/product_default.jpg`}
                          alt={`${order.product.name}'s product picture`}
                          size={40}
                        />
                        <Typography
                          as="div"
                          text={order.product.name}
                          size={14}
                          variant="primary"
                          noWrap
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbar>

            <Grid
              sx={{
                borderTop: `1px solid ${theme.color.border}`,
                paddingTop: '24px',
                marginTop: '40px',
              }}
            >
              <Box>
                <Typography text="NOTES" size={14} weight="700" variant="primary" />
                <Typography
                  as="p"
                  text="This invoice is valid and processed by computer"
                  size={14}
                  variant="primary"
                />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography text={`Help & Question`} size={14} weight="700" variant="primary" />
                <Typography as="p" text="care@myinven.io" size={14} variant="primary" />
              </Box>
            </Grid>
          </Stack>
        </Card>
      </Container>
    </Page>
  )
}
