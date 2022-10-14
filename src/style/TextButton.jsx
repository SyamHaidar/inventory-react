import styled from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const TextButton = styled(Style)`
  display: inline-flex;
  font-weight: 500;
  color: ${theme.color.brand.main};

  &:hover {
    text-decoration: underline;
  }
`

// ----------------------------------------------------------------------

export default function TextButtonStyle({ text, sx, ...other }) {
  return (
    <TextButton $sx={sx} {...other}>
      {text}
    </TextButton>
  )
}
