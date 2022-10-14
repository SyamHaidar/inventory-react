import { Link } from 'react-router-dom'
// style
import { Box, Stack, Sticky, theme } from '../../style'
// component
import { Logo } from '../../components'
//
import NavSection from './NavSection'
import NavAccount from './NavAccount'
import MenuSection from './MenuSection'

// ----------------------------------------------------------------------

export default function DashboardDrawer() {
  return (
    <>
      <Box
        sx={{
          display: 'none',
          minHeight: '100vh',
          width: '80px',
          backgroundColor: theme.color.canvas,
          borderRight: `1px solid ${theme.color.border}`,
          zIndex: 20,
          '@media (min-width: 576px)': {
            display: 'block',
          },
        }}
      >
        <Sticky sx={{ top: 0 }}>
          <Stack direction="column" sx={{ height: '100vh' }}>
            <Stack as={Link} to={'/dashboard'} justify="center" sx={{ padding: '24px 0 32px' }}>
              <Logo />
            </Stack>
            <Stack direction="column" spacing={8} sx={{ flex: 'auto' }}>
              <NavSection />
            </Stack>
            <Stack direction="column" spacing={8}>
              <MenuSection />
            </Stack>
            <Stack justify="center" sx={{ padding: '32px 0 24px' }}>
              <NavAccount />
            </Stack>
          </Stack>
        </Sticky>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          display: 'block',
          width: '100%',
          padding: '12px',
          backgroundColor: theme.color.canvas,
          borderTopLeftRadius: theme.size.rounded.main,
          borderTopRightRadius: theme.size.rounded.main,
          boxShadow: theme.color.shadow.top,
          zIndex: 10,
          '@media (min-width: 576px)': {
            display: 'none',
          },
        }}
      >
        <Stack direction="row" justify="space-around" items="center">
          <NavSection />
        </Stack>
      </Box>
    </>
  )
}
