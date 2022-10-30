import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// style
import { Avatar, Box, Divider, Grid, Stack, theme, Typography } from '../../../style'
// component
import { Container, Header, Page, Spinner } from '../../../components'
// redux action
import { getProduct } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductDetail() {
  const product = useSelector((state) => state.product.detail)
  const dispatch = useDispatch()

  const { name } = useParams()

  useEffect(() => {
    dispatch(getProduct(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return !product ? (
    <Spinner />
  ) : (
    <Page title="Order detail -">
      <Header title="Product Detail" goBack />
      <Container
        sx={{
          padding: '0 16px 80px',
          '@media (min-width:576px)': {
            padding: '0 16px 16px',
          },
        }}
      >
        <Grid>
          <Box>
            <Box
              as="img"
              src="/static/products/product_default.jpg"
              sx={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: theme.size.rounded.main,
                '@media (min-width: 768px)': {
                  height: '560px',
                },
              }}
            />
          </Box>
          <Stack direction="column" spacing={16} sx={{ padding: '24px' }}>
            <Typography
              text={
                product.quantity > 10
                  ? 'In Stock'
                  : product.quantity > 1
                  ? 'Low Stock'
                  : product.quantity === null && 'Out Of Stock'
              }
              size={12}
              weight="700"
              sx={{
                padding: '4px 12px',
                backgroundColor:
                  (product.quantity > 10 && `${theme.color.green.main}14`) ||
                  (product.quantity >= 1 && `${theme.color.yellow.main}14`) ||
                  (product.quantity === null && `${theme.color.red.main}14`),
                color:
                  (product.quantity > 10 && `${theme.color.green.main}`) ||
                  (product.quantity >= 1 && `${theme.color.yellow.main}`) ||
                  (product.quantity === null && `${theme.color.red.main}`),
                borderRadius: theme.size.rounded.full,
                marginRight: 'auto',
                textTransform: 'uppercase',
              }}
            />
            <Typography as="h2" text={product.name} size={24} weight="700" variant="primary" />
            <Divider />
            <Stack direction="row" items="flex-start" spacing={4}>
              <Typography text="Category:" weight="500" />
              <Stack direction="row" items="center" sx={{ flexWrap: 'wrap' }}>
                {product.category.map((category) => (
                  <Typography
                    key={category.id}
                    text={category.name}
                    variant="primary"
                    sx={{
                      padding: '0 6px',
                      margin: '0 4px 4px 0',
                      backgroundColor: `${theme.color.light}99`,
                      borderRadius: theme.size.rounded.small,
                    }}
                  />
                ))}
              </Stack>
            </Stack>
            <Stack direction="row" items="flex-start" spacing={4}>
              <Typography text="Stock:" weight="500" />
              <Typography text={product.quantity ? product.quantity : '0'} variant="primary" />
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
              <Avatar src="/static/avatars/avatar_default.jpg" />
              <Stack direction="column">
                <Typography text={product.supplier.name} weight="500" variant="primary" />
                <Typography text={product.supplier.mobile} size={14} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Page>
  )
}
