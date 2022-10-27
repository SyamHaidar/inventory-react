import { Link } from 'react-router-dom'
// style
import { Box, Stack, Sticky, theme } from '../../style'
// component
import { Logo, Scrollbar } from '../../components'
//
import NavSection from './NavSection'
import NavAccount from './NavAccount'
import AddButton from './AddButton'
import NavSectionMobile from './NavSectionMobile'

// ----------------------------------------------------------------------

export default function DashboardDrawer() {
  return (
    <>
      <Box
        sx={{
          display: 'block',
          minHeight: '100vh',
          width: '80px',
          backgroundColor: theme.color.canvas,
          zIndex: 2,
          // '@media (min-width: 576px)': {
          //   display: 'block',
          // },
        }}
      >
        <Sticky sx={{ top: 0 }}>
          <Stack
            direction="column"
            justify="space-between"
            sx={{ height: '100vh', borderRight: `1px dashed ${theme.color.border}` }}
          >
            <Stack direction="column" sx={{ height: '100vh' }}>
              <Stack as={Link} to={'/dashboard'} justify="center" sx={{ padding: '24px 0' }}>
                <Logo />
              </Stack>
              <Stack direction="column" items="center" spacing={8}>
                <NavSection />
              </Stack>
            </Stack>
            <Stack direction="column" items="center" spacing={16} sx={{ padding: '24px 0' }}>
              <AddButton />
              <NavAccount />
            </Stack>
          </Stack>
        </Sticky>
      </Box>

      {/* <Box
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
          <NavSectionMobile />
        </Stack>
      </Box> */}
    </>
  )
}
