import { Navigate, Outlet } from 'react-router-dom'
// style
import { Box, Stack } from '../../style'
// component
import { Footer } from '../../components'
//
import DashboardDrawer from './DashboardDrawer'
import { useSelector } from 'react-redux'

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const auth = useSelector((state) => state.auth.auth)

  return auth ? (
    <Box sx={{ display: 'block', margin: 'auto', maxWidth: '1536px' }}>
      <Stack justify="space-between">
        <DashboardDrawer />
        <Box
          sx={{ display: 'block', flex: '1 1 0%', minWidth: '0', minHeight: '100vh', zIndex: 1 }}
        >
          <Stack direction="column" sx={{ height: '100%' }}>
            <Box sx={{ flex: 'auto' }}>
              <Outlet />
            </Box>
            {/* <Footer sx={{ textAlign: 'center' }} /> */}
          </Stack>
        </Box>
      </Stack>
    </Box>
  ) : (
    <Navigate to="/" replace={true} />
  )
}
