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
      case 'light':
        return css`
          background-color: ${theme.color.light};
          border: 1px solid ${theme.color.light};
          &:hover {
            background-color: ${theme.color.light}99;
          }
        `
      case 'outline':
        return css`
          border: 1px solid ${theme.color.border};
          color: ${(props) => props.$color};
          &:hover {
            border: 1px solid ${(props) => props.$color || `${theme.color.boder}`};
            background-color: ${(props) => props.$color + 14 || `${theme.color.light}`};
          }
        `
      default:
        return css`
          color: ${(props) => props.$color || 'currenctColor'};
          &:hover {
            background-color: ${(props) => props.$color + 14 || `${theme.color.light}`};
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

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

// ----------------------------------------------------------------------

export default function IconButtonStyle({
  children,
  icon,
  iconSize,
  variant,
  size,
  color,
  sx,
  ...other
}) {
  return (
    <IconButton as="button" $variant={variant} $size={size} $color={color} $sx={sx} {...other}>
      {icon && <SvgIconStyle icon={icon} size={size === 'small' ? '16' : iconSize} />}
      {children}
    </IconButton>
  )
}
