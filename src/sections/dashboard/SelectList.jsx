import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// component
import { Overlay, Scrollbar } from '../../components'
// style
import { Box, Button, IconButton, Modal, Stack, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function SelectList({ children, data, open, isOpen, onAddData, title }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    open && (
      <Overlay open={isOpen}>
        <Modal position="bottom" width={440}>
          <Stack direction="column" justify="space-between" spacing={24}>
            <Stack justify="space-between" items="center" sx={{ padding: '24px 24px 0' }}>
              <Typography
                as="h2"
                text={`Select ${title}`}
                size={18}
                weight="700"
                variant="primary"
              />
              <IconButton onClick={isOpen} icon="close" />
            </Stack>
            <Scrollbar sx={{ maxHeight: '400px' }}>{children}</Scrollbar>
            <Box sx={{ padding: '0 24px 24px' }}>
              <Button
                onClick={onAddData}
                text={`Add new ${title}`}
                variant="outline"
                size="medium"
                width
                color={theme.color.brand.main}
              />
            </Box>
          </Stack>
        </Modal>
      </Overlay>
    )
  )
}
