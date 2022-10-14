import { Outlet } from 'react-router-dom'
// style
import { Box, Stack } from '../../style'
// component
import { Footer } from '../../components'
//
import DashboardDrawer from './DashboardDrawer'

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'block', margin: 'auto', maxWidth: '1536px' }}>
      <Stack justify="space-between">
        <DashboardDrawer />
        <Box sx={{ display: 'block', flex: '1 1 0%', minWidth: '0', minHeight: '100vh' }}>
          <Stack direction="column" sx={{ height: '100%' }}>
            <Box sx={{ flex: 'auto' }}>
              <Outlet />
            </Box>
            <Footer sx={{ textAlign: 'center' }} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
