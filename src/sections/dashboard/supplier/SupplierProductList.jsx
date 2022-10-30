import { Link } from 'react-router-dom'
// style
import {
  Box,
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
// util
import { initialName } from '../../../utils'

// ----------------------------------------------------------------------

export default function SupplierProductList({ data }) {
  const label = [{ name: 'Product' }]

  return (
    <>
      <Scrollbar>
        <Table>
          <TableListHead label={label} />
          <TableBody>
            {data.map((item, index) => (
              <TableRow hover key={item.id}>
                <TableCell padding="checkbox">{index + 1}</TableCell>
                <TableCell as="th">
                  <Stack
                    as={Link}
                    to={`/dashboard/product/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                    direction="row"
                    items="center"
                    spacing={16}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.color.brand.main,
                        borderRadius: theme.size.rounded.full,
                        color: theme.color.text.contrast,
                        height: '40px',
                        width: '40px',
                        fontSize: '15px',
                        fontWeight: '700',
                      }}
                    >
                      <Typography as="h4" text={initialName(item.name)} noWrap />
                    </Box>
                    <Typography as="div" text={item.name} size={14} variant="primary" noWrap />
                  </Stack>
                </TableCell>
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
        {/* <Typography text="Rows per page: 10" size={14} variant="primary" /> */}
      </Stack>
    </>
  )
}
