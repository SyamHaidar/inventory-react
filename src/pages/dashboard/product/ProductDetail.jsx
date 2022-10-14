import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
// style
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  theme,
  Typography,
} from '../../../style'
// component
import { Container, Header, Logo, Page } from '../../../components'
// redux action
import { getProduct } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductDetail() {
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()

  const { id } = useParams()
  const item = product.detail

  useEffect(() => {
    dispatch(getProduct(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(item)

  return (
    <Page title="Order detail -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Stack direction="row" items="center" spacing={8}>
            <IconButton as={Link} to="/dashboard/product" icon="arrow-left" />
            <Typography
              as="h1"
              text="Product detail"
              size={20}
              weight="700"
              variant="primary"
              sx={{ padding: '18px 0' }}
            />
          </Stack>
          <Stack direction="row" items="center" spacing={8}>
            <IconButton icon="eye" size="medium" />
            <IconButton icon="download" size="medium" />
            <Button startIcon="tick" text="Done" variant="outline" />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <Card>
          <Grid>
            <Box sx={{ padding: '8px' }}>
              <Box
                as="img"
                src="/static/products/product_13.jpg"
                sx={{
                  height: '480px',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: theme.size.rounded.main,
                }}
              />
            </Box>
            <Stack direction="column" spacing={40} sx={{ padding: '40px 64px' }}>
              <Typography
                // text="Nike Air Jordan 1 Low Reverse Black Toe Bulls"
                text={item.name}
                size={24}
                weight="700"
                variant="primary"
              />
              <Divider />
              <Stack justify="space-between" items="center">
                <Typography text="Category" weight="500" variant="primary" />
                <Typography text="Sneakers" />
              </Stack>
              <Stack justify="space-between" items="center">
                <Typography text="Stock" weight="500" variant="primary" />
                <Typography text={item.quantity} />
              </Stack>
              <Stack
                direction="row"
                items="center"
                spacing={12}
                sx={{
                  padding: '16px 0',
                  borderTop: `1px solid ${theme.color.border}`,
                  borderBottom: `1px solid ${theme.color.border}`,
                }}
              >
                <Avatar src="/static/products/product_13.jpg" />
                <Stack direction="column">
                  <Typography text="Nike Indonesia" weight="500" variant="primary" />
                  <Typography text="+628012345678" size={14} />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Card>
      </Container>
    </Page>
  )
}
