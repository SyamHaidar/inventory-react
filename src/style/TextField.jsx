import { useState } from 'react'
import styled from 'styled-components/macro'
import Style from './Style'
import theme from './theme'

// ----------------------------------------------------------------------

const TextField = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: ${theme.size.rounded.form};
`

const Input = styled(Style)`
  font-size: 14px;
  color: ${theme.color.text.primary};
  border-radius: ${theme.size.rounded.form};
  background-color: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 16px 14px;

  &:disabled {
    background: ${theme.color.canvas};
    opacity: 0.5;
    pointer-events: none;
  }
`

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  padding: 0 5px;
  line-height: normal;
  pointer-events: none;
  transform: translate(10px, 16px) scale(1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left top;

  ${Input}:focus + && {
    color: ${theme.color.brand.main};
  }

  ${Input}:focus + &&, 
  ${Input}:not([value='']) + &&,
  ${Input}[type='date'] + && {
    transform: translate(10px, -9px) scale(0.75);
  }
`

const Span = styled.span`
  padding: 0 5px;
  display: inline-block;
  opacity: 1;
  visibility: visible;
`

const Legend = styled.legend`
  float: unset;
  width: auto;
  overflow: hidden;
  display: block;
  padding: 0;
  height: 11px;
  font-size: 0.75em;
  visibility: hidden;
  max-width: 0.01px;
  white-space: nowrap;
`

const Fieldset = styled.fieldset`
  position: absolute;
  inset: -5px 0 0;
  text-align: left;
  position: absolute;
  inset: -5px 0px 0px;
  margin: 0px;
  padding: 0px 8px;
  pointer-events: none;
  border-radius: inherit;
  border-style: solid;
  border-width: 1px;
  border-color: ${theme.color.border};
  overflow: hidden;
  min-width: 0%;
  transition: 0.15s;

  ${Input}:focus ~ && {
    border-color: ${theme.color.brand.main};
  }

  ${Input}:focus ~ &&, 
  ${Input}:not([value='']) ~ && {
    ${Legend} {
      visibility: visible;
      max-width: 100%;

      ${Span} {
        opacity: 0;
      }
    }
  }
`

// ----------------------------------------------------------------------

export default function TextFieldStyle({ label, value, onChange, sx, ...other }) {
  const [text, setText] = useState('')

  return (
    <TextField $sx={sx}>
      <Input
        as="input"
        value={value ? value : text}
        onChange={onChange ? onChange : (e) => setText(e.target.value)}
        {...other}
      />
      {label && <Label>{label}</Label>}
      <Fieldset>
        <Legend>
          <Span>{label}</Span>
        </Legend>
      </Fieldset>
    </TextField>
  )
}
