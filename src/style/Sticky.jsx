import styled from 'styled-components/macro'
import Style from './Style'

// ----------------------------------------------------------------------

const Sticky = styled(Style)`
  position: sticky;
  display: block;
`

// ----------------------------------------------------------------------

export default function StickyStyle({ children, sx, ...other }) {
  return (
    <Sticky $sx={sx} {...other}>
      {children}
    </Sticky>
  )
}
