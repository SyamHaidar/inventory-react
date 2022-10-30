import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// style
import { Box, SvgIcon, theme } from '../style'
// redux action
import { searchProducts } from '../redux/actions/productAction'
import { searchOrders } from '../redux/actions/orderAction'

// ----------------------------------------------------------------------

const Input = styled.input`
  display: block;
  font-size: 14px;
  color: ${theme.color.text.primary};
  border-radius: ${theme.size.rounded.form};
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

export default function Search({ placeholder = 'Search...', size, sx }) {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    await dispatch(searchOrders(search))
  }

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

        <form onSubmit={handleSearch}>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            $size={size && `${size}px`}
            sx={sx}
          />
          <button type="submit" hidden />
        </form>
      </Box>
    </Box>
  )
}
