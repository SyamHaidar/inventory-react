// style
import { Box } from '../style'

// ----------------------------------------------------------------------

export default function Footer({ sx }) {
  return (
    <Box sx={{ color: 'var(--color-text-muted)', fontSize: '13px', padding: '24px 0', ...sx }}>
      <Box sx={{ marginTop: '8px' }}>&copy; {new Date().getFullYear()} wgs.</Box>
    </Box>
  )
}
