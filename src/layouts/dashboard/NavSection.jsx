import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// style
import { AnimateScaleY, AnimateZoom, Box, SvgIcon, theme } from '../../style'

// ----------------------------------------------------------------------

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > :first-child {
    background-color: ${theme.color.light};
    transition: 0.3s;

    &::after {
      content: '${(props) => props.$itemName}';
      position: absolute;
      padding: 4px 12px;
      width: auto;
      margin-left: 38px;
      font-size: 13px;
      background-color: ${theme.color.brand.main};
      color: ${theme.color.text.contrast};
      border-radius: ${theme.size.rounded.full};
      animation: ${AnimateZoom} 0.3s ease-out;
      transform-origin: left;
    }
  }

  &.active > :first-child {
    background-color: ${theme.color.brand.main}14;
    color: ${theme.color.brand.main};
    transition: 0.3s;

    &::before {
      content: ' ';
      position: absolute;
      left: -10px;
      height: 32px;
      width: 6px;
      background-color: ${theme.color.brand.main};
      border-radius: ${theme.size.rounded.full};
      animation: ${AnimateScaleY} 0.3s ease-out;
    }
  }
`

export default function NavSection() {
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
          <Box
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px',
              borderRadius: theme.size.rounded.main,
            }}
          >
            <SvgIcon icon={item.icon} size={20} />
          </Box>
        </Item>
      ))}
    </>
  )
}
