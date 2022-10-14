import styled from 'styled-components'
// style
import { Box, SvgIcon, TextField, theme } from '../style'

// ----------------------------------------------------------------------

const Input = styled(TextField)`
  border-radius: ${theme.size.rounded.full};
  height: ${(props) => props.$size || '40px'};
  padding: 0 16px 0 40px;
`

// ----------------------------------------------------------------------

export default function Search({ placeholder = 'Search...', size, sx }) {
  return (
    <Box sx={{ display: 'block', width: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '12px',
            pointerEvents: 'none',
            bottom: 0,
            top: 0,
            left: 0,
          }}
        >
          <SvgIcon icon="search" />
        </Box>

        <Input type="text" placeholder={placeholder} $size={size && `${size}px`} sx={sx} />
      </Box>
    </Box>
  )
}
