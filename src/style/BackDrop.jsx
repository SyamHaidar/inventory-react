import styled from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const BackDrop = styled(Style)`
  display: flex;
  align-items: center;
  background-color: ${theme.color.blur};
  backdrop-filter: ${theme.size.blur};
  height: ${(props) => props.$height};
`

// ----------------------------------------------------------------------

export default function BackDropStyle({ children, height, sx, ...other }) {
  return (
    <BackDrop $height={height && `${height}px`} $sx={sx} {...other}>
      {children}
    </BackDrop>
  )
}
