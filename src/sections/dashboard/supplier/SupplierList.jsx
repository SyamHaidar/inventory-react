import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  TableCell,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { Scrollbar, Search, TableListBody, TableListHead } from '../../../components'
// redux action
import { getSuppliers } from '../../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

export default function SupplierList() {
  const tableData = useSelector((state) => state.supplier)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSuppliers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tableHead = [
    { name: 'Product' },
    { name: 'Location' },
    { name: 'Address' },
    { name: 'Mobile' },
    { name: '' },
  ]

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
          <TableListHead label={tableHead} />
          <TableListBody data={tableData}>
            {tableData.data.map((item, index) => (
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
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Box sx={{ padding: '0 16px' }}>
                    <IconButton icon="more" />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableListBody>
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
