import styled from 'styled-components/macro'
import Style from './Style'

// ----------------------------------------------------------------------

const Box = styled(Style)``

// ----------------------------------------------------------------------

export default function BoxStyle({ children, sx, ...other }) {
  return (
    <Box $sx={sx} {...other}>
      {children}
    </Box>
  )
}
