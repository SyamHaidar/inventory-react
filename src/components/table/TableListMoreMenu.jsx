import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OrderModalAdd from '../../sections/dashboard/order/OrderModalAdd'
// style
import { Box, Button, Card, IconButton, Stack, theme } from '../../style'
// component
import Menu from '../Menu'

// ----------------------------------------------------------------------

export default function TableListMoreMenu({ id, edit, deleteAction }) {
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
    setIsEdit(true)
    setOpenOrder(true)
    // navigate(`/dashboard/${edit}/${id}/edit`)
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

      <OrderModalAdd open={openOrder} isOpen={isOpenOrder} id={id} isEdit={isEdit} />
    </Box>
  )
}
