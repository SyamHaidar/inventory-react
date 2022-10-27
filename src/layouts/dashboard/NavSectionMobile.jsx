import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// style
import { AnimateScaleY, AnimateZoom, SvgIcon, theme } from '../../style'

// ----------------------------------------------------------------------

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > :first-child {
    background-color: ${theme.color.light};
    color: ${theme.color.text.primary};
    transition: 0.3s;

  }

  &.active > :first-child {
    background-color: ${theme.color.brand.main}29;
    color: ${theme.color.brand.main};
    transition: 0.3s;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px;
  border-radius: ${theme.size.rounded.full};
`

// ----------------------------------------------------------------------

export default function NavSectionMobile() {
  const MENU = [
    { to: '/dashboard', icon: 'element', name: 'Dashboard' },
    { to: '/dashboard/product', icon: 'box', name: 'Product' },
    { to: '/dashboard/order', icon: 'receipt', name: 'Order' },
    { to: '/dashboard/supplier', icon: 'truck', name: 'Supplier' },
    { to: '/dashboard/user', icon: 'users', name: 'User' },
  ]

  return (
    <>
      {MENU.map((item) => (
        <Item key={item.name} as={NavLink} to={item.to} $itemName={item.name} end>
          <Wrapper>
            <SvgIcon icon={item.icon} size={20} />
          </Wrapper>
        </Item>
      ))}
    </>
  )
}
