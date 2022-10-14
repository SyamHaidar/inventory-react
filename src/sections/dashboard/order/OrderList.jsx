// style
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { Scrollbar, Search, TableListHead } from '../../../components'
// data
import { Orders } from '../../../data'

// ----------------------------------------------------------------------

export default function OrderList() {
  const TABLE_HEAD = [{ name: 'Product' }, { name: 'Qty' }, { name: 'Status' }, { name: '' }]

  return (
    <Card>
      <Stack justify="space-between" items="center" sx={{ padding: '24px' }}>
        <Box sx={{ width: '100%', maxWidth: '320px', marginRight: '32px' }}>
          <Search placeholder="Search order..." />
        </Box>
        <Stack
          direction="row"
          items="center"
          spacing={8}
          sx={{ '@media (max-width: 768px)': { display: 'none!important' } }}
        >
          <Button startIcon="download" text="PDF" variant="outline" />
          <Button startIcon="download" text="CSV" variant="outline" />
        </Stack>
        <IconButton
          icon="more"
          size="medium"
          sx={{ '@media (min-width: 768px)': { display: 'none!important' } }}
        />
      </Stack>
      <Scrollbar>
        <Table>
          <TableListHead label={TABLE_HEAD} />
          <TableBody>
            {Orders.map((item, index) => (
              <TableRow hover key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell as="th">
                  <Stack direction="row" items="center" spacing={16}>
                    <Avatar
                      src={`/static/products/product_${index + 1}.jpg`}
                      alt={`${item}'s product picture`}
                      size={40}
                    />
                    <Typography as="div" text={item.name} size={14} variant="primary" noWrap />
                  </Stack>
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      padding: '2px 12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      borderRadius: theme.size.rounded.small,
                      backgroundColor:
                        (item.status === 'Received' && `${theme.color.green.main}14`) ||
                        (item.status === 'Pending' && `${theme.color.yellow.main}14`) ||
                        (item.status === 'Cancel' && `${theme.color.red.main}14`),
                      color:
                        (item.status === 'Received' && `${theme.color.green.main}`) ||
                        (item.status === 'Pending' && `${theme.color.yellow.main}`) ||
                        (item.status === 'Cancel' && `${theme.color.red.main}`),
                    }}
                  >
                    {item.status}
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Box sx={{ padding: '0 16px' }}>
                    <IconButton icon="more" />
                  </Box>
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
        <Typography text="Rows per page: 10" size={14} variant="primary" />
      </Stack>
    </Card>
  )
}
