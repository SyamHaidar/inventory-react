import styled, { css } from 'styled-components/macro'
import theme from './theme'

// ----------------------------------------------------------------------

const SvgIcon = styled.span`
  display: inline-block;
  height: ${(props) => props.$size || '20px'};
  width: ${(props) => props.$size || '20px'};
  mask: ${(props) => `url(/static/icons/${props.$icon}.svg) center center / contain no-repeat`};

  /* Variant Props */
  ${(props) => {
    switch (props.$variant) {
      case 'brand':
        return css`
          background-color: ${theme.color.brand.main};
        `
      case 'primary':
        return css`
          background-color: ${theme.color.text.main};
        `
      default:
        return css`
          background-color: ${(props) => props.$color || 'currentcolor'};
        `
    }
  }}

  /* Additional Props */
  ${(props) => props.$sx}
`

// ----------------------------------------------------------------------

export default function SvgIconStyle({ icon, size, variant, color, sx, ...other }) {
  return (
    <SvgIcon
      $icon={icon}
      $size={size && `${size}px`}
      $variant={variant}
      $color={color}
      $sx={sx}
      {...other}
    />
  )
}
