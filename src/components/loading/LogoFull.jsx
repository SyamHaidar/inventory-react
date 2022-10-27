import styled, { keyframes } from 'styled-components/macro'
import { Box } from '../../style'
import Logo from '../Logo'

// ----------------------------------------------------------------------

const Animate = keyframes`
  0% {
    opacity: .5;
  }

  50% {
    opacity: 1;
  }
  
  100% {
    opacity: .5;
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
    animation: ${Animate} 1s linear infinite;
  }
`

// ----------------------------------------------------------------------

export default function LogoFull() {
  return (
    <Wrapper>
      <Logo height={52} />
    </Wrapper>
  )
}
