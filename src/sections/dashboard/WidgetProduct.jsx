import { useState } from 'react'
import { useSelector } from 'react-redux'
// style
import { Box, Card, Divider, Stack, theme, Typography } from '../../style'
//
import ProductModalDetail from './product/ProductModalDetail'

// ----------------------------------------------------------------------

export default function WidgetProduct() {
  const { products } = useSelector((state) => state.product)

  // open product modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  return (
    <>
      <Stack direction="column" spacing={16}>
        <Typography
          text="Products"
          size={18}
          weight="700"
          variant="primary"
          sx={{ borderLeft: `3px solid ${theme.color.yellow.main}`, paddingLeft: '16px' }}
        />
        <Box sx={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Stack direction="row" items="center" spacing={16}>
            {products.slice(0, 10).map((product) => (
              <Card key={product.id} sx={{ padding: '8px', width: '100%', minWidth: '320px' }}>
                <Stack direction="column" spacing={24}>
                  <Box
                    as="img"
                    src="/static/products/product_default.jpg"
                    alt={`${product.name}'s profile picture`}
                    sx={{
                      height: '280px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: theme.size.rounded.main,
                    }}
                  />
                  <Stack direction="column" spacing={16} sx={{ padding: '0 16px 16px' }}>
                    {/* <Typography
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
                  /> */}

                    <Typography
                      onClick={() => onClickDetail(product.id)}
                      as="h2"
                      text={product.name}
                      size={18}
                      weight="500"
                      variant="primary"
                      lineClamp="1"
                      sx={{ maxWidth: '200px', cursor: 'pointer' }}
                    />
                    <Divider />
                    <Stack direction="row" justify="space-between" items="center">
                      <Typography
                        text={product.category.name}
                        size={14}
                        weight="500"
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '26px',
                          padding: '0 8px',
                          marginRight: 'auto',
                          borderRadius: theme.size.rounded.small,
                          backgroundColor: theme.color.light,
                        }}
                      />
                      {/* <Typography text={product.category.name} variant="primary" /> */}
                      <Typography
                        text={product.quantity ? product.quantity : '0'}
                        variant="primary"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>

      {openDetail && <ProductModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
