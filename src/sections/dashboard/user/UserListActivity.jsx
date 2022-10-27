// style
import {
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

// ----------------------------------------------------------------------

export default function UserListActivity() {
  const TABLE_HEAD = [{ name: '#' }, { name: 'Date' }]

  return (
    <>
      <Scrollbar>
        <Table>
          <TableListHead label={TABLE_HEAD} />
          <TableBody>
            {/* {UserActivity.map((item, index) => (
              <TableRow hover key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Typography as="div" text={item.name} size={14} variant="primary" noWrap />
                </TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))} */}
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
