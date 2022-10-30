import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// component
import { Header, Page } from '../../components'
//redux action
import { getProducts } from '../../redux/actions/productAction'
//
import ProductList from '../../sections/dashboard/product/ProductList'

// ----------------------------------------------------------------------

export default function Product() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page title="Product -">
      <Header title="Product" />
      <ProductList />
    </Page>
  )
}
