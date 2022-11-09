import SimpleBarReact from 'simplebar-react'
import styled, { css } from 'styled-components'
// style
import { Box, theme } from '../style'

// ----------------------------------------------------------------------

const SimpleBar = styled(SimpleBarReact)`
  height: 100%;

  & .simplebar-scrollbar {
    &::before {
      background-color: ${theme.color.scrollbar};
    }

    &.simplebar-visible::before {
      opacity: 0.5;
    }

    ${(props) =>
      props.$hide &&
      css`
        &::-webkit-scrollbar {
          height: 0;
          width: 0;
        }
      `}
  }

  & .simplebar-track.simplebar-vertical {
    width: 6;
  }

  & .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    height: 6;
  }

  & .simplebar-mask {
    z-index: inherit;
  }

  ${(props) => props.$sx}
`

// ----------------------------------------------------------------------

export default function Scrollbar({ children, sx, hide = false, ...other }) {
  // const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  // if (isMobile) {
  //   return <Box $sx={{ overflowX: 'auto' }}>{children}</Box>
  // }

  return (
    <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
      <SimpleBar timeout={300} clickOnTrack={false} $sx={sx} $hide={hide} {...other}>
        {children}
      </SimpleBar>
    </Box>
  )
}
