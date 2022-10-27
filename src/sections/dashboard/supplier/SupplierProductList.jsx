// style
import {
  Avatar,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { Scrollbar, TableListHead } from '../../../components'
import { Link } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function SupplierProductList({ data }) {
  const TABLE_HEAD = [{ name: '#' }, { name: 'Qty' }]

  return (
    <>
      <Scrollbar>
        <Table>
          <TableListHead label={TABLE_HEAD} />
          <TableBody>
            {data.map((item) => (
              <TableRow hover key={item.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell as="th">
                  <Stack
                    as={Link}
                    to={`/dashboard/product/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                    direction="row"
                    items="center"
                    spacing={16}
                  >
                    <Avatar
                      src={`/static/products/product_default.jpg`}
                      alt={`${item.name}'s product picture`}
                      size={40}
                    />
                    <Typography as="div" text={item.name} size={14} variant="primary" noWrap />
                  </Stack>
                </TableCell>
                <TableCell>99</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
      <Stack
        justify="flex-end"
        items="center"
        sx={{ borderTop: `1px solid ${theme.color.border}`, padding: '24px' }}
      >
        <Typography text="Rows per page: 10" size={14} variant="primary" />
      </Stack>
    </>
  )
}
