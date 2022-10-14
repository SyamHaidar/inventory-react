import styled, { css } from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const Card = styled(Style)`
  display: block;
  overflow: hidden;
  border-radius: ${theme.size.rounded.main};
  background-color: ${theme.color.paper};

  /* Variant Props */
  ${(props) => {
    switch (props.$variant) {
      case 'outline':
        return css`
          border: 1px solid ${theme.color.border};
        `
      default:
        return css`
          box-shadow: ${theme.color.shadow.main};
        `
    }
  }}
`

// ----------------------------------------------------------------------

export default function CardStyle({ children, variant, sx, ...other }) {
  return (
    <Card $variant={variant} $sx={sx} {...other}>
      {children}
    </Card>
  )
}
