import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// style
import { Box, Stack } from '../../style'
//
import DashboardDrawer from './DashboardDrawer'

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const auth = useSelector((state) => state.auth.auth)

  return auth ? (
    <Box sx={{ display: 'block', margin: 'auto' }}>
      <Stack justify="space-between">
        <DashboardDrawer />
        <Box
          sx={{ display: 'block', flex: '1 1 0%', minWidth: '0', minHeight: '100vh', zIndex: 1 }}
        >
          <Stack direction="column" sx={{ height: '100%' }}>
            <Box sx={{ flex: 'auto' }}>
              <Outlet />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ) : (
    <Navigate to="/" replace={true} />
  )
}
