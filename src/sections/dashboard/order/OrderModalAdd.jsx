import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
// style
import { Button, Grid, Stack, TextField, theme, Typography } from '../../../style'
// component
import { FormModalAdd, Spinner } from '../../../components'
// redux action
import { createOrder, editOrder, updateOrder } from '../../../redux/actions/orderAction'
import { getSuppliers } from '../../../redux/actions/supplierAction'
//
import SupplierModalAdd from '../supplier/SupplierModalAdd'
import ProductModalAdd from '../product/ProductModalAdd'
import SelectList from '../SelectList'
import { getProducts } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function OrderModalAdd({ open, isOpen, isEdit = false, id }) {
  const product = useSelector((state) => state.product.data)
  const supplier = useSelector((state) => state.supplier.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('Choose product')
  const [supplierId, setSupplierId] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [date, setDate] = useState('')
  const [quantity, setQuantity] = useState('')

  const body = {
    productId: productId,
    supplierId: supplierId,
    date: date,
    quantity: quantity,
  }

  // sort data by name
  const newProduct = [...product]
  const productData = newProduct.sort((a, b) => a.name.localeCompare(b.name))

  const newSupplier = [...supplier]
  const supplierData = newSupplier.sort((a, b) => a.name.localeCompare(b.name))

  // form modal product toggle
  const [openProduct, setOpenProduct] = useState(false)
  const isOpenProduct = () => setOpenProduct(!openProduct)

  // form modal add product toggle
  const [openAddProduct, setOpenAddProduct] = useState(false)
  const isOpenAddProduct = () => {
    setOpenAddProduct(!openAddProduct)
    isOpenProduct()
  }

  // form modal supplier toggle
  const [openSupplier, setOpenSupplier] = useState(false)
  const isOpenSupplier = () => setOpenSupplier(!openSupplier)

  // form modal add supplier toggle
  const [openAddSupplier, setOpenAddSupplier] = useState(false)
  const isOpenAddSupplier = () => {
    setOpenAddSupplier(!openAddSupplier)
    isOpenSupplier()
  }

  // disabled button save if data empty
  const handleSave = !productId || !date || !quantity

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(createOrder(body))
    // clear state & close modal
    setProductId('')
    setProductName('')
    setSupplierId('')
    setSupplierName('')
    setDate('')
    setQuantity('')
    isOpen()
  }

  // handle edit form
  const handleEdit = async (e) => {
    e.preventDefault()
    await dispatch(updateOrder({ id, body, navigate }))
    // clear state & close modal
    setProductId('')
    setProductName('')
    setSupplierId('')
    setSupplierName('')
    setDate('')
    setQuantity('')
    isOpen()
  }

  const fetchOrder = async () => {
    const { payload } = await dispatch(editOrder(id))
    setProductId(payload.productId)
    setProductName(payload.product.name)
    setSupplierId(payload.supplierId)
    setSupplierName(payload.supplier.name)
    setDate(moment.unix(payload.date).format('Y-MM-DD'))
    setQuantity(payload.quantity)
    console.log(payload)
  }

  useEffect(() => {
    if (isEdit) {
      fetchOrder()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  return (
    <>
      {/* add new order modal */}
      {open && (
        <FormModalAdd
          title="order"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
          isEdit
        >
          <Stack
            as="form"
            onSubmit={handleSubmit}
            direction="column"
            spacing={20}
            sx={{ flex: 'auto' }}
          >
            <Grid>
              <TextField
                onClick={isOpenProduct}
                label="Product"
                name="product"
                type="text"
                required
                readOnly
                value={productName}
              />
              <TextField
                onClick={isOpenSupplier}
                label="Supplier"
                name="supplier"
                type="text"
                required
                readOnly
                disabled
                value={supplierName}
              />
            </Grid>
            <TextField
              label="Quantity"
              name="quantity"
              type="text"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value.replace(/\D/g, ''))}
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button hidden />
          </Stack>
        </FormModalAdd>
      )}

      {/* select product modal */}
      {openProduct && (
        <SelectList
          data={getProducts()}
          open={openProduct}
          isOpen={isOpenProduct}
          onAddData={isOpenAddProduct}
          title="product"
        >
          {!product ? (
            <Spinner height={128} />
          ) : (
            <Stack direction="column" spacing={4}>
              {productData.map((product) => (
                <Stack
                  key={product.id}
                  direction="column"
                  spacing={2}
                  onClick={() => {
                    setProductId(product.id)
                    setProductName(product.name)
                    setSupplierId(product.supplier.id)
                    setSupplierName(product.supplier.name)
                    isOpenProduct()
                  }}
                  sx={{
                    padding: '8px 24px',
                    '&:hover': {
                      backgroundColor: `${theme.color.light}99`,
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Typography text={product.name} size={14} weight="700" variant="primary" />
                  <Typography text={product.supplier.name} size={12} />
                </Stack>
              ))}
            </Stack>
          )}
        </SelectList>
      )}

      {/* select supplier modal */}
      {openSupplier && (
        <SelectList
          data={getSuppliers()}
          open={openSupplier}
          isOpen={isOpenSupplier}
          onAddData={isOpenAddSupplier}
          title="supplier"
        >
          {!supplierData ? (
            <Spinner height={128} />
          ) : (
            <Stack direction="column" spacing={4}>
              {supplierData.map((supplier) => (
                <Button
                  key={supplier.id}
                  text={supplier.name}
                  size="medium"
                  onClick={() => {
                    setSupplierId(supplier.id)
                    setSupplierName(supplier.name)
                    isOpenSupplier()
                  }}
                  sx={{
                    justifyContent: 'left!important',
                    borderRadius: '0!important',
                    padding: '0 24px!important',
                  }}
                />
              ))}
            </Stack>
          )}
        </SelectList>
      )}

      {/* add data modal */}
      <ProductModalAdd open={openAddProduct} isOpen={isOpenAddProduct} />
      <SupplierModalAdd open={openAddSupplier} isOpen={isOpenAddSupplier} />
    </>
  )
}
