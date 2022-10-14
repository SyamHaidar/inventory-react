import styled, { css } from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const Divider = styled(Style)`
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: center;

  /* Orientation Props */
  ${(props) => {
    switch (props.$orientation) {
      case 'vertical': // X
        return css`
          margin: 0px;
          flex-shrink: 0;
          border-width: 0px thin 0px 0px;
          border-style: solid;
          border-color: ${theme.color.border};
          height: auto;
          align-self: stretch;
        `
      default: // Y
        return css`
          margin: 0px;
          border-width: 0px 0px thin;
          border-style: solid;
          border-color: ${theme.color.border};
        `
    }
  }}

  /* Text Props */
  ${(props) =>
    props.$text !== '' &&
    css`
      &:after {
        content: '${props.$text}';
        display: inline-block;
        position: absolute;
        top: -12px;
        padding: 0 12px;
        background: ${theme.color.canvas};
        border-radius: ${theme.size.rounded.full};
      }
    `}
`

// ----------------------------------------------------------------------

export default function DividerStyle({ orientation, text = '', sx }) {
  return <Divider as="hr" $orientation={orientation} $text={text} $sx={sx} />
}
