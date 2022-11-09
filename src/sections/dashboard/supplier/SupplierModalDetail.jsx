import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Box, IconButton, Modal, Stack, SvgIcon, theme, Typography } from '../../../style'
// component
import { AvatarName, Overlay, Scrollbar } from '../../../components'
import SupplierProductList from './SupplierProductList'
// redux action
import { getSupplier } from '../../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

export default function SupplierModalDetail({ open, name }) {
  const { isLoading, supplier } = useSelector((state) => state.supplier)
  const dispatch = useDispatch()

  useEffect(() => {
    open && dispatch(getSupplier(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return isLoading || !supplier ? (
    ''
  ) : (
    <Overlay open={open}>
      <Modal position="right">
        <Stack
          justify="space-between"
          items="center"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            height: '56px',
            backgroundColor: theme.color.paper,
            padding: '0 16px',
          }}
        >
          <Typography as="h4" text="Supplier detail" size={18} weight="700" variant="primary" />
          <IconButton onClick={open} icon="close" />
        </Stack>
        <Scrollbar>
          <Stack direction="column" spacing={24}>
            <Stack direction="row" items="flex-start" spacing={16} sx={{ padding: '24px 16px 0' }}>
              <AvatarName name={supplier.name} size={64} fontSize={24} />
              <Stack direction="column" spacing={4}>
                <Typography as="h2" text={supplier.name} size={18} weight="700" variant="primary" />
                <Stack direction="row" items="flex-start" spacing={8}>
                  <SvgIcon icon="location" size={14} sx={{ marginTop: '2px', flexShrink: '0' }} />
                  <Typography text={`${supplier.address}, ${supplier.location}`} size={14} />
                </Stack>
                <Stack direction="row" items="flex-start" spacing={8}>
                  <SvgIcon icon="call" size={14} sx={{ marginTop: '2px', flexShrink: '0' }} />
                  <Typography text={supplier.mobile} size={14} />
                </Stack>
              </Stack>
            </Stack>
            <Box>
              <SupplierProductList data={supplier.product} />
            </Box>
          </Stack>
        </Scrollbar>
      </Modal>
    </Overlay>
  )
}
