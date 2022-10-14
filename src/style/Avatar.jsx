import styled from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const Avatar = styled(Style)`
  height: ${(props) => props.$size || '48px'};
  width: ${(props) => props.$size || '48px'};
  object-fit: cover;
  border-radius: ${theme.size.rounded.full};
  flex-shrink: 0;
`

// ----------------------------------------------------------------------

export default function AvatarStyle({ src, size, sx, ...other }) {
  return <Avatar as="img" src={src} $size={size && `${size}px`} $sx={sx} {...other} />
}
