import { useState } from 'react'
import styled from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const TextField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled(Style)`
  font-size: 14px;
  color: ${theme.color.text.primary};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.size.rounded.form};
  display: block;
  width: 100%;
  padding: 16px 14px;
  transition: 0.3s;

  &:focus {
    border: 1px solid ${theme.color.brand.main};
    box-shadow: 0 0 0 2px ${theme.color.brand.main}80;
  }
`

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  padding: 0 6px;
  line-height: normal;
  pointer-events: none;
  background-color: ${theme.color.canvas};
  transform: translate(10px, 16px) scale(1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left top;

  ${Input}:focus + && {
    color: ${theme.color.brand.main};
  }

  ${Input}:focus + &&, 
  ${Input}:not([value='']) + && {
    transform: translate(10px, -9px) scale(0.75);
  }
`

// ----------------------------------------------------------------------

export default function TextFieldStyle({ label, value, onChange, sx, ...other }) {
  const [text, setText] = useState('')

  return (
    <TextField>
      <Input
        as="input"
        value={value ? value : text}
        onChange={onChange ? onChange : (e) => setText(e.target.value)}
        $sx={sx}
        {...other}
      />
      {label && <Label>{label}</Label>}
    </TextField>
  )
}
