import { useState } from 'react'
import { useDispatch } from 'react-redux'
// style
import { Box, Button, Card, IconButton, Modal, Stack, theme, Typography } from '../../style'
// component
import Menu from '../Menu'
import Overlay from '../Overlay'
import ProductModalAdd from '../../sections/dashboard/product/ProductModalAdd'
import OrderModalAdd from '../../sections/dashboard/order/OrderModalAdd'
import SupplierModalAdd from '../../sections/dashboard/supplier/SupplierModalAdd'
import UserModalAdd from '../../sections/dashboard/user/UserModalAdd'
import { getProducts } from '../../redux/actions/productAction'
import { getOrders } from '../../redux/actions/orderAction'
import { getUsers } from '../../redux/actions/userAction'
import { getSuppliers } from '../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

const ModalDelete = ({ open, title, message, selected, handleDelete }) => (
  <Overlay open={open}>
    <Modal>
      <Stack items="center" sx={{ height: '56px', padding: '0 16px' }}>
        <Typography as="h2" text={title} size={18} weight="700" variant="primary" />
      </Stack>
      <Stack direction="column" spacing={16} sx={{ padding: '0 16px' }}>
        <Typography
          text={selected}
          size={14}
          weight="500"
          sx={{
            padding: '8px 16px',
            borderRadius: theme.size.rounded.small,
            backgroundColor: `${theme.color.red.main}14`,
            color: theme.color.red.main,
          }}
        />
        <Typography as="p" text={message} size={14} />
      </Stack>
      <Stack direction="column" spacing={12} sx={{ marginTop: '32px', padding: '0 16px 16px' }}>
        <Button onClick={handleDelete} variant="brand" size="medium" width>
          Yes, delete it!
        </Button>
        <Button onClick={open} variant="outline" size="medium" width>
          Cancel
        </Button>
      </Stack>
    </Modal>
  </Overlay>
)

export default function TableListMoreMenu({
  id,
  edit,
  deleteTitle,
  deleteMessage,
  deleteSelected,
  deleteAction,
}) {
  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false)

  // product toggle
  const [openProduct, setOpenProduct] = useState(false)
  const isOpenProduct = () => setOpenProduct(!openProduct)

  // order toggle
  const [openOrder, setOpenOrder] = useState(false)
  const isOpenOrder = () => setOpenOrder(!openOrder)

  // supplier toggle
  const [openSupplier, setOpenSupplier] = useState(false)
  const isOpenSupplier = () => setOpenSupplier(!openSupplier)

  // user toggle
  const [openUser, setOpenUser] = useState(false)
  const isOpenUser = () => setOpenUser(!openUser)

  // menu toggle
  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

  // delete validation
  const [openDelete, setOpenDelete] = useState(false)
  const isOpenDelete = () => setOpenDelete(!openDelete)

  // handle edit data
  const handleEdit = (e) => {
    e.preventDefault()
    setIsEdit(true)
    if (edit === 'product') {
      isOpenProduct()
    } else if (edit === 'order') {
      isOpenOrder()
    } else if (edit === 'supplier') {
      isOpenSupplier()
    } else if (edit === 'user') {
      isOpenUser()
    }
  }

  // handle delete data
  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(deleteAction)
    if (edit === 'product') {
      await dispatch(getProducts())
    } else if (edit === 'order') {
      await dispatch(getOrders())
    } else if (edit === 'supplier') {
      await dispatch(getSuppliers())
    } else if (edit === 'user') {
      await dispatch(getUsers())
    }
    isOpen()
    isOpenDelete()
  }

  return (
    <>
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
                <Button
                  onClick={isOpenDelete}
                  text="Delete"
                  startIcon="trash"
                  sx={{ justifyContent: 'left!important' }}
                />
                <IconButton onClick={isOpen} icon="close" />
              </Stack>
            </Card>
          </Menu>
        )}
      </Box>

      {openProduct && (
        <ProductModalAdd id={id} open={openProduct} isOpen={isOpenProduct} isEdit={isEdit} />
      )}

      {openOrder && <OrderModalAdd id={id} open={openOrder} isOpen={isOpenOrder} isEdit={isEdit} />}

      {openSupplier && (
        <SupplierModalAdd id={id} open={openSupplier} isOpen={isOpenSupplier} isEdit={isEdit} />
      )}

      {openUser && <UserModalAdd id={id} open={openUser} isOpen={isOpenUser} isEdit={isEdit} />}

      {openDelete && (
        <ModalDelete
          open={isOpenDelete}
          title={deleteTitle}
          message={deleteMessage}
          selected={deleteSelected}
          handleDelete={handleDelete}
        />
      )}
    </>
  )
}
