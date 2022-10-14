import { Portal } from 'react-portal'
// style
import { Box, theme } from '../style'

// ----------------------------------------------------------------------

export default function Overlay({ children, open }) {
  return (
    <Portal>
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          inset: 0,
          zIndex: 9999,
        }}
      >
        <Box
          onClick={open}
          sx={{ position: 'fixed', backgroundColor: theme.color.overlay, inset: 0 }}
        />
        {children}
      </Box>
    </Portal>
  )
}
