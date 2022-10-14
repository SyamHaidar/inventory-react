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
      case 'primary':
        return css`
          background-color: ${theme.color.primary.main};
          color: ${theme.color.text.contrast};
          border: 1px solid ${theme.color.primary.main};
          &:hover {
            box-shadow: ${theme.color.shadow.button.primary};
          }
        `
      case 'light':
        return css`
          background-color: ${theme.color.light};
          border: 1px solid ${theme.color.light};
          color: ${theme.color.text.primary};
        `
      case 'outline':
        return css`
          /* background-color: ${theme.color.canvas}; */
          color: ${theme.color.text.primary};
          border: 1px solid ${theme.color.border};
        `
      default:
        return css`
          color: ${theme.color.text.primary};
          &:hover {
            background-color: ${theme.color.light};
          }
        `
    }
  }}

  /* Height Props */
  ${(props) => {
    switch (props.$height) {
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
  ${(props) => {
    switch (props.$width) {
      case 'full':
        return css`
          width: 100%;
        `
      default:
        return css``
    }
  }}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

// ----------------------------------------------------------------------

export default function ButtonStyle({
  text,
  iconSize,
  variant,
  height,
  width,
  startIcon,
  endIcon,
  sx,
  ...other
}) {
  return (
    <Button as="button" $variant={variant} $height={height} $width={width} $sx={sx} {...other}>
      {startIcon || endIcon ? (
        <StackStyle
          direction={(startIcon && 'row') || (endIcon && 'row-reverse')}
          items="center"
          spacing={8}
        >
          <SvgIconStyle icon={startIcon || endIcon} size={iconSize} />
          <Box>{text}</Box>
        </StackStyle>
      ) : (
        <>{text}</>
      )}
    </Button>
  )
}
