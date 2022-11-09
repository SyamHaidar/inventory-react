import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Avatar, Box, Divider, IconButton, Modal, Stack, theme, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'
// redux action
import { getProduct } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductModalDetail({ open, name }) {
  const { isLoading, product } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    open && dispatch(getProduct(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return isLoading || !product ? (
    ''
  ) : (
    <Overlay open={open}>
      <Modal position="right">
        <Stack
          justify="space-between"
          items="center"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            height: '56px',
            backgroundColor: theme.color.paper,
            padding: '0 16px',
          }}
        >
          <Typography as="h4" text="Product detail" size={18} weight="700" variant="primary" />
          <IconButton onClick={open} icon="close" />
        </Stack>
        <Stack direction="column" spacing={24} sx={{ padding: '0 16px 16px' }}>
          <Stack direction="column" spacing={40}>
            <Box
              as="img"
              src="/static/products/product_default.jpg"
              alt={`${product.name}'s profile picture`}
              sx={{
                height: '220px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: theme.size.rounded.main,
              }}
            />
            <Stack direction="column" spacing={16}>
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
                <Typography text={product.category.name} variant="primary" />
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
                <Avatar
                  src="/static/avatars/avatar_default.jpg"
                  alt={`${product.supplier.name}'s profile picture`}
                />
                <Stack direction="column">
                  <Typography text={product.supplier.name} weight="500" variant="primary" />
                  <Typography text={product.supplier.mobile} size={14} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Overlay>
  )
}
