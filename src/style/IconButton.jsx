import styled, { css } from 'styled-components/macro'
import SvgIconStyle from './SvgIcon'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const IconButton = styled(Style)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.size.rounded.full};
  flex-shrink: 0;
  transition: 0.3s;

  /* Variant Props */
  ${(props) => {
    switch (props.$variant) {
      case 'brand':
        return css`
          background-color: ${theme.color.brand.main};
          color: ${theme.color.text.contrast};
          border: 1px solid ${theme.color.brand.main};
          &:hover {
            box-shadow: ${theme.color.shadow.button.brand};
          }
        `
      case 'primary':
        return css`
          background-color: ${theme.color.primary.main};
          color: ${theme.color.text.contrast};
          border: 1px solid ${theme.color.primary.main};
          &:hover {
            box-shadow: ${theme.color.shadow.button.brand.primary};
          }
        `
      case 'light':
        return css`
          background-color: ${theme.color.light};
          border: 1px solid ${theme.color.light};
        `
      case 'outline':
        return css`
          /* background-color: ${theme.color.canvas}; */
          border: 1px solid ${theme.color.border};
        `
      default:
        return css`
          &:hover {
            background-color: ${theme.color.light};
          }
        `
    }
  }}

  /* Size Props */
  ${(props) => {
    switch (props.$size) {
      case 'small':
        return css`
          height: ${theme.size.button.small};
          width: ${theme.size.button.small};
        `
      case 'medium':
        return css`
          height: ${theme.size.button.medium};
          width: ${theme.size.button.medium};
        `
      case 'large':
        return css`
          height: ${theme.size.button.large};
          width: ${theme.size.button.large};
        `
      default:
        return css`
          height: ${theme.size.button.main};
          width: ${theme.size.button.main};
        `
    }
  }}
`

// ----------------------------------------------------------------------

export default function IconButtonStyle({ children, icon, iconSize, variant, size, sx, ...other }) {
  return (
    <IconButton as="button" $variant={variant} $size={size} $sx={sx} {...other}>
      {icon && <SvgIconStyle icon={icon} size={size === 'small' ? '16' : iconSize} />}
      {children}
    </IconButton>
  )
}
