import styled from 'styled-components'
// style
import { AnimateZoom, Box, SvgIcon, theme } from '../../style'

// ----------------------------------------------------------------------

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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
`

export default function MenuSection() {
  const MENU = [
    { icon: 'notification', name: 'Notification' },
    { icon: 'moon', name: 'Setting' },
  ]

  return (
    <>
      {MENU.map((item) => (
        <Item key={item.name} $itemName={item.name}>
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
