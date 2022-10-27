// style
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import { Card, Stack, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function WidgetProduct({ name, value, icon, color, iconSx }) {
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()

  // sort data by latest add
  const productArray = [...product.data]
  const productData = productArray.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card sx={{ padding: '16px', width: '100%' }}>
      <Stack direction="column">
        <Typography text="Product" />
        <Stack direction="row" spacing={16}>
          {productData.map((product) => (
            <Typography key={product.id} text={product.name} />
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}
