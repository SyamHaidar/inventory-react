import styled, { css } from 'styled-components/macro'
import Style from './Style'

// ----------------------------------------------------------------------

const Stack = styled(Style)`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$items};

  /* Diretion Props */
  ${(props) => {
    switch (props.$direction) {
      case 'row':
        return css`
          & > :not(:first-child) {
            margin-left: ${(props) => props.$spacing};
          }
        `
      case 'row-reverse':
        return css`
          display: inline-flex;
          & > :not(:last-child) {
            margin-left: ${(props) => props.$spacing};
          }
        `
      case 'column':
        return css`
          & > :not(:first-child) {
            margin-top: ${(props) => props.$spacing};
          }
        `
      default:
        return css``
    }
  }}
`

// ----------------------------------------------------------------------

export default function StackStyle({ children, direction, justify, items, spacing, sx, ...other }) {
  return (
    <Stack
      $direction={direction}
      $justify={justify}
      $items={items}
      $spacing={spacing && `${spacing}px`}
      $sx={sx}
      {...other}
    >
      {children}
    </Stack>
  )
}
