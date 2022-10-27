// style
import { Box, Button, Modal, Stack, Typography } from '../style'
// component
import { Overlay } from '.'

// ----------------------------------------------------------------------

export default function FormModalAdd({
  children,
  title,
  open,
  handleSave,
  handleSubmit,
  handleEdit,
  isEdit,
}) {
  return (
    <Overlay open={open}>
      <Modal position="bottom" sx={{ padding: '24px' }}>
        <Stack direction="column" sx={{ height: '100%' }}>
          <Box sx={{ textAlign: 'left', marginBottom: '24px' }}>
            <Typography
              as="h2"
              text={isEdit ? `Edit ${title}` : `Add ${title}`}
              size={18}
              weight="700"
              variant="primary"
            />
          </Box>

          {children}

          <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
            <Button onClick={open} text="Cancel" variant="light" size="medium" />
            {isEdit ? (
              <Button
                onClick={handleEdit}
                disabled={handleSave}
                text="Save changes"
                variant="brand"
                size="medium"
              />
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={handleSave}
                text={`Save ${title}`}
                variant="brand"
                size="medium"
              />
            )}
          </Stack>
        </Stack>
      </Modal>
    </Overlay>
  )
}
