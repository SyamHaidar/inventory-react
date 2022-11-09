import { useState } from 'react'
import { useSelector } from 'react-redux'
// style
import { Box, Button, Card, IconButton, Stack, theme } from '../../style'
// component
import { Menu } from '../../components'
//
import ProductModalAdd from '../../sections/dashboard/product/ProductModalAdd'
import SupplierModalAdd from '../../sections/dashboard/supplier/SupplierModalAdd'
import UserModalAdd from '../../sections/dashboard/user/UserModalAdd'
import OrderModalAdd from '../../sections/dashboard/order/OrderModalAdd'

// ----------------------------------------------------------------------
export default function AddButton() {
  const auth = useSelector((state) => state.auth.user)

  // add toggle
  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

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

  // button list
  const ADD_BUTTON_1 = [
    { icon: 'box', text: 'Add Product', onClick: isOpenProduct },
    { icon: 'receipt', text: 'Add Order', onClick: isOpenOrder },
    { icon: 'truck', text: 'Add Supplier', onClick: isOpenSupplier },
    { icon: 'users', text: 'Add User', onClick: isOpenUser },
  ]

  const ADD_BUTTON_2 = [
    { icon: 'box', text: 'Add Product', onClick: isOpenProduct },
    { icon: 'receipt', text: 'Add Order', onClick: isOpenOrder },
    { icon: 'truck', text: 'Add Supplier', onClick: isOpenSupplier },
  ]

  return (
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <IconButton
        onClick={isOpen}
        icon="add"
        variant="brand"
        size="medium"
        color={theme.color.brand.main}
      />

      {open && (
        <Menu
          open={isOpen}
          sx={{
            bottom: 48,
            marginLeft: '-8px',
            transformOrigin: 'bottom left',
            '@media (max-width:576px)': {
              right: 0,
              marginRight: '-8px',
              transformOrigin: 'bottom right',
            },
          }}
        >
          <Card sx={{ padding: '8px' }}>
            <Stack direction="column" spacing={8}>
              {auth.roleId === 1
                ? ADD_BUTTON_1.map((item) => (
                    <Button
                      key={item.text}
                      onClick={() => {
                        isOpen()
                        item.onClick()
                      }}
                      startIcon={item.icon}
                      text={item.text}
                      sx={{
                        justifyContent: 'left!important',
                        padding: '0 16px!important',
                      }}
                    />
                  ))
                : ADD_BUTTON_2.map((item) => (
                    <Button
                      key={item.text}
                      onClick={() => {
                        isOpen()
                        item.onClick()
                      }}
                      startIcon={item.icon}
                      text={item.text}
                      sx={{
                        justifyContent: 'left!important',
                        padding: '0 16px!important',
                      }}
                    />
                  ))}
            </Stack>
          </Card>
        </Menu>
      )}

      <ProductModalAdd open={openProduct} isOpen={isOpenProduct} />
      <OrderModalAdd open={openOrder} isOpen={isOpenOrder} />
      <SupplierModalAdd open={openSupplier} isOpen={isOpenSupplier} />
      <UserModalAdd open={openUser} isOpen={isOpenUser} />
    </Box>
  )
}
