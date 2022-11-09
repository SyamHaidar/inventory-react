import styled, { css } from 'styled-components/macro'
import { Box } from '.'
import StackStyle from './Stack'
import Style from './Style'
import SvgIconStyle from './SvgIcon'
import theme from './theme'

// ----------------------------------------------------------------------

const Button = styled(Style)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: ${theme.size.rounded.full};
  white-space: nowrap;
  padding: 0 20px;
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
          color: ${theme.color.text.primary};
          &:hover {
            background-color: ${theme.color.light}99;
          }
        `
      case 'outline':
        return css`
          border: 1px solid ${theme.color.border};
          color: ${(props) => props.$color || theme.color.text.primary};
          &:hover {
            border: 1px solid ${(props) => props.$color || `${theme.color.boder}`};
            background-color: ${(props) => props.$color + 14 || `${theme.color.light}`};
          }
        `
      default:
        return css`
          color: ${(props) => props.$color || theme.color.text.primary};
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
          font-size: 12px;
          height: ${theme.size.button.small};
        `
      case 'medium':
        return css`
          font-size: 14px;
          height: ${theme.size.button.medium};
        `
      case 'large':
        return css`
          font-size: 15px;
          height: ${theme.size.button.large};
        `
      default:
        return css`
          font-size: 14px;
          height: ${theme.size.button.main};
        `
    }
  }}

  /* Width Props */
  ${(props) =>
    props.$width &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

// ----------------------------------------------------------------------

export default function ButtonStyle({
  children,
  text,
  iconSize,
  variant,
  size,
  width = false,
  color,
  startIcon,
  endIcon,
  sx,
  ...other
}) {
  return (
    <Button
      as="button"
      $variant={variant}
      $size={size}
      $width={width}
      $color={color}
      $sx={sx}
      {...other}
    >
      {startIcon || endIcon ? (
        <StackStyle
          direction={(startIcon && 'row') || (endIcon && 'row-reverse')}
          items="center"
          spacing={12}
        >
          <SvgIconStyle icon={startIcon || endIcon} size={size === 'small' ? '16' : iconSize} />
          <Box>{text}</Box>
        </StackStyle>
      ) : (
        <>{text}</>
      )}
      {children}
    </Button>
  )
}
