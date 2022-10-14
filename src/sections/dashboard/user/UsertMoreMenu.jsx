import { useState } from 'react'
// style
import { Box, Button, IconButton, Modal, Stack, Typography } from '../../../style'
// component
import { Overlay } from '../../../components'

// ----------------------------------------------------------------------

export default function UserMoreMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)} icon="more" size="medium" />

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal sx={{ padding: '24px' }}>
            <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
              <Typography as="h2" text="John Doe" weight="500" variant="primary" />
            </Box>
            <Stack direction="column" spacing={12} sx={{ marginTop: '32px' }}>
              <Button
                onClick={() => setOpen(false)}
                text="Edit"
                variant="light"
                height="medium"
                width="full"
              />
              <Button
                onClick={() => setOpen(false)}
                text="Delete"
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
