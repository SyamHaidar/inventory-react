import styled from 'styled-components/macro'
// style
import { Box, Style, SvgIcon, theme } from '../style'

// ----------------------------------------------------------------------

const Input = styled(Style)`
  display: block;
  font-size: 14px;
  color: ${theme.color.text.primary};
  border-radius: ${theme.size.rounded.full};
  background-color: transparent;
  height: ${(props) => props.$size || '40px'};
  width: 100%;
  padding: 0 16px 0 40px;
  border: 1px solid ${theme.color.border};

  &:focus {
    border-color: ${theme.color.brand.main};
  }
`

// ----------------------------------------------------------------------

export default function Search({
  placeholder = 'Search...',
  keyword,
  setKeyword,
  onSearch,
  size,
  sx,
}) {
  return (
    <Box sx={{ display: 'block', width: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '12px',
            pointerEvents: 'none',
            bottom: 0,
            top: 0,
            left: 0,
          }}
        >
          <SvgIcon icon="search" />
        </Box>

        <form onSubmit={onSearch}>
          <Input
            as="input"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={placeholder}
            $size={size && `${size}px`}
            $sx={sx}
          />
          <button type="submit" hidden />
        </form>
      </Box>
    </Box>
  )
}
