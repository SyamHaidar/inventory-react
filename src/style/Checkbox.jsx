import { useState } from 'react'
import styled from 'styled-components/macro'
import Style from './Style'
import SvgIconStyle from './SvgIcon'
import theme from './theme'

// ----------------------------------------------------------------------

const Checkbox = styled(Style)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  padding: 8px;
  color: ${(props) => props.$color || theme.color.text.secondary};
`
const Input = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`

// ----------------------------------------------------------------------

export default function CheckboxStyle({ checked, onChange, sx, ...other }) {
  // const defaultChecked = checked ? checked : false
  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = () => setIsChecked(!isChecked)

  return (
    <Checkbox $color={checked && theme.color.brand.main} $sx={sx}>
      <Input
        type="checkbox"
        checked={checked ? checked : isChecked}
        onChange={onChange ? onChange : handleCheck}
        {...other}
      />
      <SvgIconStyle icon={checked ? 'check-box' : 'check-box-blank'} size={20} />
    </Checkbox>
  )
}
