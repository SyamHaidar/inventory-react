import styled, { css } from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const Typography = styled(Style)`
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$weight};
  line-height: ${(props) => props.$lineHeight};

  /* Variant Props */
  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return css`
          color: ${theme.color.text.primary};
        `
      case 'secondary':
        return css`
          color: ${theme.color.text.secondary};
        `
      case 'muted':
        return css`
          color: ${theme.color.text.disabled};
        `
      default:
        return css`
          color: ${(props) => props.$color};
        `
    }
  }}

  /* Line Clamp Props */
  ${(props) =>
    props.$lineClamp === '1' &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${(props) =>
    props.$lineClamp !== '1' &&
    props.$lineClamp !== '' &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${props.$lineClamp};
    `}

  /* No Wrap */
  ${(props) =>
    props.$noWrap &&
    css`
      white-space: nowrap;
    `}
`

// ----------------------------------------------------------------------

export default function TypographyStyle({
  text,
  size,
  weight,
  variant,
  lineClamp = '',
  lineHeight,
  noWrap = false,
  color,
  sx,
  ...other
}) {
  return (
    <Typography
      as="span"
      $size={size && `${size}px`}
      $weight={weight}
      $variant={variant}
      $lineClamp={lineClamp}
      $lineHeight={lineHeight && `${lineHeight}px`}
      $noWrap={noWrap}
      $sx={sx}
      $color={color}
      {...other}
    >
      {text}
    </Typography>
  )
}
