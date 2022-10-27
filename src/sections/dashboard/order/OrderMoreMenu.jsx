import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// style
import { Box, Button, Card, IconButton, Stack, theme } from '../../../style'
// component
import { Menu } from '../../../components'
// redux action
import { deleteOrder } from '../../../redux/actions/orderAction'

// ----------------------------------------------------------------------

export default function OrderMoreMenu({ orderId }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

  const handleEdit = () => {
    navigate(`/dashboard/order/${orderId}/edit`)
  }

  const handleDelete = () => {
    dispatch(deleteOrder(orderId))
    isOpen()
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton onClick={isOpen} icon="more" size="medium" />

      {open && (
        <Menu
          open={isOpen}
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            marginRight: '-4px',
            transformOrigin: 'right',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              padding: '8px',
              backgroundColor: `${theme.color.canvas}!important`,
              borderRadius: `${theme.size.rounded.full}!important`,
            }}
          >
            <Stack direction="row" item="center" spacing={4}>
              <Button
                onClick={handleEdit}
                text="Edit"
                startIcon="edit"
                sx={{ justifyContent: 'left!important' }}
              />
              <Button
                onClick={handleDelete}
                text="Delete"
                startIcon="trash"
                color={theme.color.red.main}
                sx={{ justifyContent: 'left!important' }}
              />
              <IconButton onClick={isOpen} icon="close" />
            </Stack>
          </Card>
        </Menu>
      )}
    </Box>
  )
}
