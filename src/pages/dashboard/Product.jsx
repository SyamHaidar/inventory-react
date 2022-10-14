// style
import { Stack, Typography } from '../../style'
// component
import { Container, Header, Page } from '../../components'
//redux
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
//
import ProductModalAdd from '../../sections/dashboard/product/ProductModalAdd'
import ProductList from '../../sections/dashboard/product/ProductList'
import { useEffect } from 'react'

// ----------------------------------------------------------------------

export default function Product() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page title="Product -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Typography
            as="h1"
            text="Product"
            size={20}
            weight="700"
            variant="primary"
            sx={{ padding: '18px 0' }}
          />
          <Stack direction="row" items="center" spacing={8}>
            <ProductModalAdd />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        {/* <div>
          {product.data.data &&
            product.data.data.map((item, index) => <div key={index}>{item.title}</div>)}
        </div> */}
        <ProductList />
      </Container>
    </Page>
  )
}
