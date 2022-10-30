import styled, { css } from 'styled-components/macro'
import { AnimateModal, AnimateModalBottom } from './Animate'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const Modal = styled(Style)`
  background: ${theme.color.paper};
  position: fixed;
  overflow: hidden;

  /* Position Props */
  ${(props) => {
    switch (props.$position) {
      case 'bottom':
        return css`
          bottom: 0;
          width: 100%;
          max-width: ${(props) => props.$width || '640px'};
          max-height: calc(100vh - 40px);
          border-top-left-radius: ${theme.size.rounded.main};
          border-top-right-radius: ${theme.size.rounded.main};
          animation: ${AnimateModalBottom} 0.15s ease-out;
          box-shadow: ${theme.color.shadow.top};

          /* Small screen <= 576px */
          @media (max-width: 576px) {
            max-width: 100%;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        `
      default:
        return css`
          width: ${(props) => props.$width || '360px'};
          max-height: calc(100vh - 40px);
          border-radius: ${theme.size.rounded.main};
          animation: ${AnimateModal} 0.15s ease-out;
          box-shadow: ${theme.color.shadow.main};

          /* Small screen <= 576px */
          @media (max-width: 576px) {
            bottom: 0;
            width: 100%;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: ${AnimateModalBottom} 0.15s ease-out;
            box-shadow: ${theme.color.shadow.top};
          }
        `
    }
  }}
`

// ----------------------------------------------------------------------

export default function ModalStyle({ children, position, width, sx }) {
  return (
    <Modal $position={position} $width={width && `${width}px`} $sx={sx}>
      {children}
    </Modal>
  )
}
