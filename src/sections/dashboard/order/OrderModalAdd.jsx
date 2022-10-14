import { useState } from 'react'
// style
import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'

// ----------------------------------------------------------------------

export default function OrderModalAdd() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)} icon="add" size="medium" variant="brand" />

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal position="bottom" sx={{ padding: '24px' }}>
            <Stack direction="column" sx={{ height: '100%' }}>
              <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
                <Typography as="h2" text="Add order" size={24} weight="700" variant="primary" />
              </Box>
              <Stack direction="column" spacing={20} sx={{ flex: 'auto' }}>
                <TextField label="Supplier" type="text" required />
                <TextField label="Name" type="text" required />
                <TextField label="Category" type="text" required />
                <TextField label="Quantity" type="text" required />
              </Stack>
              <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
                <Button
                  onClick={() => setOpen(false)}
                  text="Cancel"
                  variant="light"
                  height="medium"
                />
                <Button
                  onClick={() => setOpen(false)}
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
