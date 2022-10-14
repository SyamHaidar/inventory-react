// style
import { BackDrop, Sticky } from '../style'
//
import Container from './Container'

// ----------------------------------------------------------------------

export default function Header({ children, sx }) {
  return (
    <Sticky sx={{ top: 0, zIndex: 2, ...sx }}>
      <BackDrop sx={{ display: 'block', height: '100%' }}>
        <Container>{children}</Container>
      </BackDrop>
    </Sticky>
  )
}
