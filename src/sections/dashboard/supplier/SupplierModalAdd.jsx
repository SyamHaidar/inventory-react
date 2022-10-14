import { useState } from 'react'
import { useDispatch } from 'react-redux'
// style
import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'
//
import { createSupplier } from '../../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

export default function SupplierModalAdd() {
  const dispatch = useDispatch()
  const [supplier, setSupplier] = useState({ name: '', location: '', address: '', mobile: '' })

  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createSupplier(supplier))
    setSupplier({ name: '', address: '', mobile: '' })
  }

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value })
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)} icon="add" size="medium" variant="brand" />

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal position="bottom" sx={{ padding: '24px' }}>
            <Stack direction="column" sx={{ height: '100%' }}>
              <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
                <Typography as="h2" text="Add supplier" size={24} weight="700" variant="primary" />
              </Box>
              <Stack direction="column" spacing={20} sx={{ flex: 'auto' }}>
                <TextField
                  label="Supplier name"
                  type="text"
                  name="name"
                  required
                  value={supplier.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Location"
                  type="text"
                  name="location"
                  required
                  value={supplier.location}
                  onChange={handleChange}
                />
                <TextField
                  label="Address"
                  type="text"
                  name="address"
                  required
                  value={supplier.address}
                  onChange={handleChange}
                />
                <TextField
                  label="Mobile"
                  type="number"
                  name="mobile"
                  required
                  value={supplier.mobile}
                  onChange={handleChange}
                />
              </Stack>
              <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
                <Button
                  onClick={() => setOpen(false)}
                  text="Cancel"
                  variant="light"
                  height="medium"
                />
                <Button
                  onClick={handleSubmit}
                  text="Save Product"
                  variant="brand"
                  height="medium"
                />
              </Stack>
            </Stack>
          </Modal>
        </Overlay>
      )}
    </>
  )
}
