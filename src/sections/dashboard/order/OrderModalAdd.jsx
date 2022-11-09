import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
// style
import { Grid, Stack, SvgIcon, TextField, theme, Typography } from '../../../style'
// component
import { FormModalAdd, Spinner } from '../../../components'
import ProductModalAdd from '../product/ProductModalAdd'
import SelectList from '../SelectList'
// redux action
import { createOrder, editOrder, getOrders, updateOrder } from '../../../redux/actions/orderAction'
import { getProducts } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function OrderModalAdd({ id, open, isOpen, isEdit }) {
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('Select product')
  const [supplierId, setSupplierId] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [date, setDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [status, setStatus] = useState('')
  const [statusName, setStatusName] = useState('Select status')

  const body = {
    productId: productId,
    supplierId: supplierId,
    date: date,
    quantity: quantity,
    status: status,
  }

  // sort data by name
  const newProduct = [...product.products]
  const productData = newProduct.sort((a, b) => a.name.localeCompare(b.name))

  // form modal product toggle
  const [openProduct, setOpenProduct] = useState(false)
  const isOpenProduct = () => setOpenProduct(!openProduct)

  // form modal add product toggle
  const [openAddProduct, setOpenAddProduct] = useState(false)
  const isOpenAddProduct = () => {
    setOpenAddProduct(!openAddProduct)
    isOpenProduct()
  }

  // form modal status toggle
  const [openStatus, setOpenStatus] = useState(false)
  const isOpenStatus = () => setOpenStatus(!openStatus)

  // disabled button save if data empty
  const handleSave = !productId || !date || !quantity

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isEdit) {
      await dispatch(createOrder(body))
    } else {
      await dispatch(updateOrder({ id, body, navigate }))
    }
    await dispatch(getOrders())
    // clear state & close modal
    setProductId('')
    setProductName('Select product')
    setSupplierId('')
    setSupplierName('')
    setDate('')
    setQuantity('')
    setStatus('')
    setStatusName('Select status')
    isOpen()
  }

  const fetchOrder = async () => {
    const { payload } = await dispatch(editOrder(id))
    setProductId(payload.productId)
    setProductName(payload.product.name)
    setSupplierId(payload.supplierId)
    setSupplierName(payload.supplier.name)
    setDate(moment.unix(payload.date).format('Y-MM-DD'))
    setStatus(payload.status)
    setStatusName(payload.status ? 'Order In' : 'Order Out')
    setQuantity(payload.quantity)
  }

  useEffect(() => {
    if (isEdit) {
      fetchOrder()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  // status order value
  const selectStatus = [
    { status: true, name: 'Order In', icon: 'arrow-left', color: 'green' },
    { status: false, name: 'Order Out', icon: 'arrow-right', color: 'red' },
  ]

  return (
    <>
      {/* add new order modal */}
      {open && (
        <FormModalAdd
          title="order"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
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
                label="Supplier"
                name="supplier"
                type="text"
                required
                readOnly
                disabled
                value={supplierName}
              />
              <TextField
                label="Date"
                name="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <TextField
                label="Quantity"
                name="quantity"
                type="text"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value.replace(/\D/g, ''))}
              />
            </Grid>
            <TextField
              onClick={isOpenStatus}
              label="Status"
              name="status"
              type="text"
              required
              readOnly
              value={statusName}
            />
          </Stack>
        </FormModalAdd>
      )}

      {/* select product modal */}
      {openProduct && (
        <SelectList
          data={getProducts()}
          open={isOpenProduct}
          onAddData={isOpenAddProduct}
          title="product"
        >
          {product.isLoading ? (
            <Spinner height={128} />
          ) : (
            productData.map((product) => (
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
                  padding: '8px 12px',
                  borderRadius: theme.size.rounded.main,
                  '&:hover': {
                    backgroundColor: `${theme.color.light}99`,
                    cursor: 'pointer',
                  },
                }}
              >
                <Typography text={product.name} size={14} weight="500" variant="primary" />
                <Typography text={product.supplier.name} size={12} />
              </Stack>
            ))
          )}
        </SelectList>
      )}

      {/* select status modal */}
      {openStatus && (
        <SelectList open={isOpenStatus} title="status">
          {selectStatus.map((status, index) => (
            <Stack
              key={index}
              onClick={() => {
                setStatus(status.status)
                setStatusName(status.name)
                isOpenStatus()
              }}
              direction="row"
              items="center"
              spacing={8}
              sx={{
                padding: '8px 12px',
                borderRadius: theme.size.rounded.main,
                '&:hover': {
                  backgroundColor: `${theme.color.light}99`,
                  cursor: 'pointer',
                },
              }}
            >
              <Stack
                justify="center"
                items="center"
                sx={{
                  backgroundColor: `${theme.color[status.color].main}14`,
                  borderRadius: theme.size.rounded.full,
                  height: '24px',
                  width: '24px',
                  flexShrink: 0,
                }}
              >
                <SvgIcon
                  icon={status.icon}
                  size={16}
                  color={theme.color[status.color].main}
                  sx={{ transform: 'rotate(-45deg)' }}
                />
              </Stack>
              <Typography text={status.name} size={14} weight="500" variant="primary" />
            </Stack>
          ))}
        </SelectList>
      )}

      {/* add data modal */}
      {openAddProduct && <ProductModalAdd open={openAddProduct} isOpen={isOpenAddProduct} />}
    </>
  )
}
