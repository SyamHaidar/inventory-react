import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// component
import { Overlay, Scrollbar } from '../../components'
// style
import { Box, Button, IconButton, Modal, Stack, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function SelectList({ children, data, open, onAddData, title }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Overlay open={open}>
      <Modal width={400}>
        <Stack justify="space-between" items="center" sx={{ height: '56px', padding: '0 16px' }}>
          <Typography as="h2" text={`Select ${title}`} size={18} weight="700" variant="primary" />
          <IconButton onClick={open} icon="close" />
        </Stack>
        <Scrollbar sx={{ maxHeight: '320px' }}>
          <Stack direction="column" spacing={8} sx={{ padding: '4px' }}>
            {children}
          </Stack>
        </Scrollbar>
        {onAddData && (
          <Box sx={{ padding: '16px' }}>
            <Button
              onClick={onAddData}
              text={`Add new ${title}`}
              variant="outline"
              size="medium"
              width
              color={theme.color.brand.main}
            />
          </Box>
        )}
      </Modal>
    </Overlay>
  )
}
