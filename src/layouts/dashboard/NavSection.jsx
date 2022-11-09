import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// style
import { AnimateZoom, SvgIcon, theme } from '../../style'
import { useSelector } from 'react-redux'

// ----------------------------------------------------------------------

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > :first-child {
    background-color: ${theme.color.light};
    color: ${theme.color.text.primary};
    transition: 0.3s;

    &::after {
      content: '${(props) => props.$itemName}';
      position: absolute;
      padding: 4px 12px;
      width: auto;
      margin-left: 38px;
      font-size: 14px;
      background-color: ${theme.color.paper}a6;
      backdrop-filter: ${theme.size.blur};
      color: ${theme.color.text.primary};
      box-shadow: ${theme.color.shadow.main};
      border-radius: ${theme.size.rounded.small};
      animation: ${AnimateZoom} 0.3s ease-out;
      transform-origin: left;
    }
  }

  &.active > :first-child {
    background-color: ${theme.color.brand.main}14;
    color: ${theme.color.brand.main};

    &::before {
      content: ' ';
      position: absolute;
      left: -14px;
      height: 32px;
      width: 6px;
      background-color: ${theme.color.brand.main};
      border-top-right-radius: ${theme.size.rounded.full};
      border-bottom-right-radius: ${theme.size.rounded.full};
      animation: ${AnimateZoom} 0.3s ease-out;
      transform-origin: left;
    }
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

export default function NavSection() {
  const auth = useSelector((state) => state.auth.user)

  const MENU_1 = [
    { to: '/dashboard', icon: 'element', name: 'Dashboard' },
    { to: '/dashboard/product', icon: 'box', name: 'Product' },
    { to: '/dashboard/order', icon: 'receipt', name: 'Order' },
    { to: '/dashboard/supplier', icon: 'truck', name: 'Supplier' },
    { to: '/dashboard/user', icon: 'users', name: 'User' },
    { to: '/dashboard/log', icon: 'log', name: 'Log' },
  ]

  const MENU_2 = [
    { to: '/dashboard', icon: 'element', name: 'Dashboard' },
    { to: '/dashboard/product', icon: 'box', name: 'Product' },
    { to: '/dashboard/order', icon: 'receipt', name: 'Order' },
    { to: '/dashboard/supplier', icon: 'truck', name: 'Supplier' },
  ]

  return (
    <>
      {auth.roleId === 1
        ? MENU_1.map((item) => (
            <Item key={item.name} as={NavLink} to={item.to} $itemName={item.name} end>
              <Wrapper>
                <SvgIcon icon={item.icon} size={20} />
              </Wrapper>
            </Item>
          ))
        : MENU_2.map((item) => (
            <Item key={item.name} as={NavLink} to={item.to} $itemName={item.name} end>
              <Wrapper>
                <SvgIcon icon={item.icon} size={20} />
              </Wrapper>
            </Item>
          ))}
    </>
  )
}
