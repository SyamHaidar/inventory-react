import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'
//
import { createProduct } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductModalAdd() {
  const isSuccess = useSelector((state) => state.product.success)
  const dispatch = useDispatch()

  const [product, setProduct] = useState({ name: '', category: '', quantity: '' })
  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

  console.log(isSuccess)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createProduct(product))
    if (isSuccess) {
      setOpen(false)
      setProduct({ name: '', quantity: '' })
    }
  }

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (
    <>
      <IconButton onClick={isOpen} icon="add" size="medium" variant="brand" />

      {open && (
        <Overlay open={isOpen}>
          <Modal position="bottom" sx={{ padding: '24px' }}>
            <Stack direction="column" sx={{ height: '100%' }}>
              <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
                <Typography as="h2" text="Add product" size={24} weight="700" variant="primary" />
              </Box>
              <Stack direction="column" spacing={20} sx={{ flex: 'auto' }}>
                <TextField
                  label="Name"
                  name="name"
                  type="text"
                  required
                  value={product.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Category"
                  name="category"
                  type="text"
                  required
                  value={product.category}
                  onChange={handleChange}
                />
                <TextField
                  label="Quantity"
                  name="quantity"
                  type="text"
                  required
                  value={product.quantity}
                  onChange={handleChange}
                />
              </Stack>
              <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
                <Button onClick={isOpen} text="Cancel" variant="light" height="medium" />
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
