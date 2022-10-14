import { useState } from 'react'
// style
import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'

// ----------------------------------------------------------------------

export default function UserModalAdd() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)} icon="add" size="medium" variant="brand" />

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal sx={{ padding: '24px' }}>
            <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
              <Typography as="h2" text="Add new user" weight="500" variant="primary" />
            </Box>
            <Stack direction="column" spacing={20}>
              <TextField label="Name" type="text" required />
              <TextField label="Password" type="password" required />
            </Stack>
            <Stack direction="column" spacing={12} sx={{ marginTop: '32px' }}>
              <Button
                onClick={() => setOpen(false)}
                text="Create"
                variant="brand"
                height="medium"
                width="full"
              />
              <Button
                onClick={() => setOpen(false)}
                text="Cancel"
                variant="light"
                height="medium"
                width="full"
              />
            </Stack>
          </Modal>
        </Overlay>
      )}
    </>
  )
}
