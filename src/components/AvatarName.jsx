import styled from 'styled-components/macro'
// style
import { theme, Typography } from '../style'
// util
import { initialName } from '../utils'

// ----------------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.light};
  border-radius: ${theme.size.rounded.full};
  color: ${theme.color.text.contrast};
  height: ${(props) => props.$size || '40px'};
  width: ${(props) => props.$size || '40px'};
  font-size: ${(props) => props.$fontSize || '15px'};
  font-weight: 700;
  flex-shrink: 0;
`

// ----------------------------------------------------------------------

export default function AvatarName({ name, size, fontSize }) {
  return (
    <Wrapper $size={size && `${size}px`} $fontSize={fontSize && `${fontSize}px`}>
      <Typography as="h4" text={name ? initialName(name) : ''} noWrap />
    </Wrapper>
  )
}
