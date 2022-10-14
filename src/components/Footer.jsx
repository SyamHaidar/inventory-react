// style
import { Box } from '../style'

// ----------------------------------------------------------------------

export default function Footer({ sx }) {
  return (
    <Box sx={{ color: 'var(--color-text-muted)', fontSize: '12px', padding: '24px 0', ...sx }}>
      <Box sx={{ marginTop: '8px' }}>
        COPYRIGHT &copy; {new Date().getFullYear()} MyInven. ALL RIGHTS RESERVED
      </Box>
    </Box>
  )
}
