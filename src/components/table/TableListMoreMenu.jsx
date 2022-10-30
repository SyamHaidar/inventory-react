import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// style
import { Box, Button, Card, IconButton, Stack, theme } from '../../style'
// component
import Menu from '../Menu'
import OrderModalAdd from '../../sections/dashboard/order/OrderModalAdd'

// ----------------------------------------------------------------------

export default function TableListMoreMenu({ id, edit, deleteAction, editModal }) {
  const auth = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isEdit, setIsEdit] = useState(false)

  // order toggle
  const [openOrder, setOpenOrder] = useState(false)
  const isOpenOrder = () => setOpenOrder(!openOrder)

  // menu toggle
  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

  // handle edit data
  const handleEdit = () => {
    if (editModal) {
      setIsEdit(true)
      setOpenOrder(true)
    } else {
      navigate(`/dashboard/${edit}/${id}/edit`)
    }
  }

  // handle delete data
  const handleDelete = () => {
    dispatch(deleteAction)
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
      <IconButton onClick={isOpen} icon="more" sx={{ color: theme.color.text.secondary }} />

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
              padding: '4px',
              backgroundColor: `${theme.color.canvas}!important`,
              backdropFilter: theme.size.blur,
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
              {auth.roleId === 1 && id !== auth.id && (
                <Button
                  onClick={handleDelete}
                  text="Delete"
                  startIcon="trash"
                  color={theme.color.red.main}
                  sx={{ justifyContent: 'left!important' }}
                />
              )}
              <IconButton onClick={isOpen} icon="close" />
            </Stack>
          </Card>
        </Menu>
      )}

      <OrderModalAdd open={openOrder} isOpen={isOpenOrder} id={id} isEdit={isEdit} />
    </Box>
  )
}
