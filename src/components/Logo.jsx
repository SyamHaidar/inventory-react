import styled from 'styled-components/macro'
import { theme } from '../style'

// ----------------------------------------------------------------------

const Icon = styled.span`
  display: inline-block;
`

// ----------------------------------------------------------------------

export default function Logo({ height }) {
  return (
    <Icon>
      <svg height={!height ? '32' : height} viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8371 25.7878L0 1.45752H8.41889L14.256 25.7878H5.8371Z" fill={theme.color.contrast} />
        <path d="M23.5729 5.49414L9.31689 36.5517H11.8987H16.3888H18.4093L23.5729 25.3396L28.7365 36.5517H30.4202L33.002 25.7881L23.5729 5.49414Z" fill={theme.color.contrast} />
        <path d="M38.8391 36.5515L47.1457 1.45752H38.7268L30.4202 36.5515H38.8391Z" fill="#FF731D"/>
        {/* <path d="M38.8391 36.5515L47.1457 1.45752H38.7268L30.4202 36.5515H38.8391Z" fill="#0021ED"/> */}
      </svg>
    </Icon>
  )
}
