// style
import { Box } from '../style'

// ----------------------------------------------------------------------

export default function Container({ children, sx }) {
  return (
    <Box
      sx={{
        display: 'block',
        width: '100%',
        padding: '0 16px',
        '@media (min-width: 576px)': {
          padding: '0 32px',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
