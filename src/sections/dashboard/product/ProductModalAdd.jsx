import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Button, Stack, TextField } from '../../../style'
// component
import { FormModalAdd, Spinner } from '../../../components'
// redux action
import { createProduct } from '../../../redux/actions/productAction'
import { getSuppliers } from '../../../redux/actions/supplierAction'
//
import SupplierModalAdd from '../supplier/SupplierModalAdd'
import SelectList from '../SelectList'

// ----------------------------------------------------------------------

export default function ProductModalAdd({ open, isOpen }) {
  const supplier = useSelector((state) => state.supplier.data)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [supplierId, setSupplierId] = useState('')
  const [supplierName, setSupplierName] = useState('Choose supplier')
  const [category, setCategory] = useState('')

  const body = { name: name, supplier: supplierName, supplierId: supplierId, category: category }

  // sort data by name
  const newSupplier = [...supplier]
  const supplierData = newSupplier.sort((a, b) => a.name.localeCompare(b.name))

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
    await dispatch(createProduct(body))
    // clear state & close modal
    setName('')
    setSupplierId('')
    setSupplierName('')
    setCategory('')
    isOpen()
  }

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
            <button hidden />
          </Stack>
        </FormModalAdd>
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

      <SupplierModalAdd open={openAddSupplier} isOpen={isOpenAddSupplier} />
    </>
  )
}
