import styled from 'styled-components/macro'
// style
import { AnimateZoom, Box, Style } from '../style'

// ----------------------------------------------------------------------

const Wrapper = styled(Style)`
  position: absolute;
  animation: ${AnimateZoom} 0.3s ease-out;
`
// ----------------------------------------------------------------------

export default function Menu({ children, open, sx }) {
  return (
    <Box sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: 1 }}>
      <Box onClick={open} sx={{ position: 'fixed', inset: 0, backgroundColor: 'transparent' }} />
      <Wrapper $sx={sx}>{children}</Wrapper>
    </Box>
  )
}
