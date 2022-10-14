import SimpleBarReact from 'simplebar-react'
import styled from 'styled-components'
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
      opacity: 1;
    }
  }

  & .simplebar-track.simplebar-vertical {
    width: 8;
  }

  & .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    height: 8;
  }

  & .simplebar-mask {
    z-index: inherit;
  }
`

// ----------------------------------------------------------------------

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  if (isMobile) {
    return <Box $sx={{ overflowX: 'auto' }}>{children}</Box>
  }

  return (
    <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
      <SimpleBar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBar>
    </Box>
  )
}
