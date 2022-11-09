import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Stack, TextField, theme, Typography } from '../../../style'
// component
import { FormModalAdd, Spinner } from '../../../components'
// redux action
import {
  createProduct,
  editProduct,
  getProducts,
  updateProduct,
} from '../../../redux/actions/productAction'
import { getSuppliers } from '../../../redux/actions/supplierAction'
//
import SupplierModalAdd from '../supplier/SupplierModalAdd'
import SelectList from '../SelectList'

// ----------------------------------------------------------------------

export default function ProductModalAdd({ id, open, isOpen, isEdit }) {
  const supplier = useSelector((state) => state.supplier)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [supplierId, setSupplierId] = useState('')
  const [supplierName, setSupplierName] = useState('Choose supplier')
  const [category, setCategory] = useState([])

  const body = {
    name: name,
    supplier: supplierName,
    supplierId: supplierId,
    category: category,
  }

  // sort data by name
  // const newSupplier = [...supplier]
  // const supplierData = newSupplier.sort((a, b) => a.name.localeCompare(b.name))

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
  const handleSave = !name || !supplierId

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isEdit) {
      await dispatch(createProduct(body))
    } else {
      await dispatch(updateProduct({ id, body }))
    }
    await dispatch(getProducts())
    // clear state & close modal
    setName('')
    setSupplierId('')
    setSupplierName('Choose supplier')
    setCategory([])
    isOpen()
  }

  const fetchProduct = async () => {
    const { payload } = await dispatch(editProduct(id))
    setName(payload.name)
    setSupplierId(payload.supplier.id)
    setSupplierName(payload.supplier.name)
    setCategory(payload.category.name)
  }

  console.log(category)

  useEffect(() => {
    if (isEdit) {
      fetchProduct()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  return (
    <>
      {/* add new product modal */}
      {open && (
        <FormModalAdd
          title="product"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
        >
          <Stack
            as="form"
            onSubmit={handleSubmit}
            direction="column"
            spacing={20}
            sx={{ flex: 'auto' }}
          >
            <TextField
              onClick={isOpenSupplier}
              label="Supplier"
              name="supplier"
              type="text"
              required
              readOnly
              value={supplierName}
            />
            <TextField
              label="Product name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value.replace(/[^a-z 0-9]/gi, ''))}
            />
            <TextField
              label="Category"
              name="category"
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value.replace(/[^a-z 0-9,]/gi, '').split(','))}
            />
          </Stack>
        </FormModalAdd>
      )}

      {/* select supplier modal */}
      {openSupplier && (
        <SelectList
          data={getSuppliers()}
          open={isOpenSupplier}
          onAddData={isOpenAddSupplier}
          title="supplier"
        >
          {supplier.isLoading ? (
            <Spinner height={128} />
          ) : (
            supplier.suppliers.map((supplier) => (
              <Stack
                key={supplier.id}
                direction="column"
                spacing={2}
                onClick={() => {
                  setSupplierId(supplier.id)
                  setSupplierName(supplier.name)
                  isOpenSupplier()
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
                <Typography text={supplier.name} size={14} weight="500" variant="primary" />
                <Typography text={`${supplier.address}, ${supplier.location}`} size={12} />
              </Stack>
            ))
          )}
        </SelectList>
      )}

      <SupplierModalAdd open={openAddSupplier} isOpen={isOpenAddSupplier} />
    </>
  )
}
