import styled, { keyframes } from 'styled-components/macro'
import { Box } from '../../style'
import Logo from '../Logo'

// ----------------------------------------------------------------------

const Animate = keyframes`
  from {
    opacity: 0;
    transform: scale(1.2);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;

  & > :first-child {
    animation: ${Animate} 0.3s ease-out;
  }
`

// ----------------------------------------------------------------------

export default function LogoFull() {
  return (
    <Wrapper>
      <Logo height={80} />
    </Wrapper>
  )
}
