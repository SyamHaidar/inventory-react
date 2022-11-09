// style
import { Button, Modal, Stack, Typography } from '../style'
// component
import { Overlay } from '.'

// ----------------------------------------------------------------------

export default function FormModalAdd({ children, title, open, handleSave, handleSubmit, isEdit }) {
  return (
    <Overlay open={open}>
      <Modal width={520}>
        <Stack items="center" sx={{ height: '56px', padding: '0 16px' }}>
          <Typography
            as="h2"
            text={isEdit ? `Edit ${title}` : `Add ${title}`}
            size={18}
            weight="700"
            variant="primary"
          />
        </Stack>
        <Stack direction="column" sx={{ padding: '16px' }}>
          {children}

          <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
            <Button onClick={open} text="Cancel" variant="light" size="medium" />
            <Button
              onClick={handleSubmit}
              disabled={handleSave}
              text={isEdit ? `Save changes` : `Save ${title}`}
              variant="brand"
              size="medium"
            />
          </Stack>
        </Stack>
      </Modal>
    </Overlay>
  )
}
