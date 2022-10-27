import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// style
import {
  Avatar,
  Box,
  Checkbox,
  Stack,
  TableCell,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteProduct, getProducts } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductList() {
  const product = useSelector((state) => state.product.data)
  const dispatch = useDispatch()

  // sort data by latest add
  const productArray = [...product]
  const productData = productArray.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const label = [
    { name: 'Product' },
    { name: 'Supplier' },
    { name: 'Category' },
    { name: 'Qty' },
    { name: '' },
  ]

  return (
    <TableList label={label} data={product}>
      {productData.map((product, index) => (
        <TableRow hover key={index}>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell as="th">
            <Stack
              as={Link}
              to={`/dashboard/product/${product.slug}`}
              direction="row"
              items="center"
              spacing={16}
            >
              <Avatar
                src={`/static/products/product_default.jpg`}
                alt={`${product.name}'s product picture`}
                size={40}
              />
              <Typography as="div" text={product.name} size={14} variant="primary" noWrap />
            </Stack>
          </TableCell>
          <TableCell>{product.supplier.name}</TableCell>
          <TableCell>{product.category.length ? product.category[0].name : '-'}</TableCell>
          <TableCell>
            <Box
              sx={{
                display: 'inline-flex',
                padding: '2px 8px',
                fontSize: '14px',
                fontWeight: '700',
                borderRadius: theme.size.rounded.small,
                backgroundColor:
                  (product.quantity > 10 && `${theme.color.green.main}14`) ||
                  (product.quantity > 1 && `${theme.color.yellow.main}14`) ||
                  (product.quantity === null && `${theme.color.red.main}14`),
                color:
                  (product.quantity > 10 && `${theme.color.green.main}`) ||
                  (product.quantity > 1 && `${theme.color.yellow.main}`) ||
                  (product.quantity === null && `${theme.color.red.main}`),
              }}
            >
              {product.quantity ? product.quantity : '0'}
            </Box>
          </TableCell>
          <TableCell padding="more" sx={{ textAlign: 'right' }}>
            <TableListMoreMenu
              id={product.id}
              edit="product"
              deleteAction={deleteProduct(product.id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  )
}
