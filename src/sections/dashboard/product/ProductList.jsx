import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Box, Stack, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteProduct, getProducts } from '../../../redux/actions/productAction'
import { initialName } from '../../../utils'

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
    <TableList search="Search product..." label={label} data={product}>
      {productData.map((product, index) => (
        <TableRow hover key={index}>
          <TableCell padding="checkbox">{index + 1}</TableCell>
          <TableCell>
            <Stack
              as={Link}
              to={`/dashboard/product/${product.slug}`}
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
                <Typography as="h4" text={initialName(product.name)} noWrap />
              </Box>
              <Typography as="div" text={product.name} weight="500" variant="primary" noWrap />
            </Stack>
          </TableCell>
          <TableCell>{product.supplier.name}</TableCell>
          <TableCell>{product.category.length ? product.category[0].name : '-'}</TableCell>
          <TableCell>{product.quantity ? product.quantity : '0'}</TableCell>
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
