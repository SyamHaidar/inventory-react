import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// style
import { Box, Stack, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteSupplier, getSuppliers } from '../../../redux/actions/supplierAction'
// util
import { initialName } from '../../../utils'

// ----------------------------------------------------------------------

export default function SupplierList() {
  const supplier = useSelector((state) => state.supplier.data)
  const dispatch = useDispatch()

  // sort data by latest add
  const newSupplier = [...supplier]
  const supplierData = newSupplier.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))

  useEffect(() => {
    dispatch(getSuppliers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const label = [{ name: 'Name' }, { name: 'Address' }, { name: 'Mobile' }, { name: '' }]

  return (
    <TableList label={label} data={supplier}>
      {supplierData.map((supplier, index) => (
        <TableRow hover key={supplier.id}>
          <TableCell padding="checkbox">{index + 1}</TableCell>
          <TableCell>
            <Stack
              as={Link}
              to={`/dashboard/supplier/${supplier.name.replace(/\s+/g, '').toLowerCase()}`}
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
                <Typography as="h4" text={initialName(supplier.name)} noWrap />
              </Box>
              <Typography as="div" text={supplier.name} size={14} variant="primary" noWrap />
            </Stack>
          </TableCell>
          <TableCell>{`${supplier.address}, ${supplier.location}`}</TableCell>
          <TableCell>{supplier.mobile}</TableCell>
          <TableCell padding="more" sx={{ textAlign: 'right' }}>
            <TableListMoreMenu
              id={supplier.id}
              edit="supplier"
              deleteAction={deleteSupplier(supplier.id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  )
}
