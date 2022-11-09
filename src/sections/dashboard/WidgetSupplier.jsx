import { useState } from 'react'
import { useSelector } from 'react-redux'
// style
import { Box, Card, Stack, SvgIcon, theme, Typography } from '../../style'
// component
import { AvatarName } from '../../components'
import SupplierModalDetail from './supplier/SupplierModalDetail'

// ----------------------------------------------------------------------

export default function WidgetSupplier() {
  const { suppliers } = useSelector((state) => state.supplier)

  // open supplier modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  return (
    <>
      <Stack direction="column" spacing={16}>
        <Typography
          text="Suppliers"
          size={18}
          weight="700"
          variant="primary"
          sx={{ borderLeft: `3px solid ${theme.color.red.main}`, paddingLeft: '16px' }}
        />
        <Box sx={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Stack direction="row" items="center" spacing={16}>
            {suppliers.slice(0, 10).map((supplier) => (
              <Card
                key={supplier.id}
                sx={{ padding: '40px 16px', width: '100%', minWidth: '240px' }}
              >
                <Stack direction="column" items="center" spacing={16}>
                  <Box
                    sx={{
                      border: `1px dashed ${theme.color.border}`,
                      borderRadius: theme.size.rounded.full,
                      padding: '8px',
                    }}
                  >
                    <AvatarName name={supplier.name} size={64} fontSize={24} />
                  </Box>
                  <Stack direction="column" items="center" spacing={4}>
                    <Typography
                      onClick={() => onClickDetail(supplier.id)}
                      as="h2"
                      text={supplier.name}
                      size={18}
                      weight="500"
                      variant="primary"
                      lineClamp="1"
                      sx={{ maxWidth: '200px', cursor: 'pointer' }}
                    />
                    <Stack direction="row" items="center" spacing={4}>
                      <SvgIcon icon="location" size={14} sx={{ flexShrink: '0' }} />
                      <Typography text={supplier.location} size={14} />
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>

      {openDetail && <SupplierModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
