import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// style
import { Avatar, Checkbox, Stack, TableCell, TableRow, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteSupplier, getSuppliers } from '../../../redux/actions/supplierAction'

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

  const label = [
    { name: 'Name' },
    { name: 'Location' },
    { name: 'Address' },
    { name: 'Mobile' },
    { name: '' },
  ]

  return (
    <TableList label={label} data={supplier}>
      {supplierData.map((supplier) => (
        <TableRow hover key={supplier.id}>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell as="th">
            <Stack
              as={Link}
              to={`/dashboard/supplier/${supplier.name.replace(/\s+/g, '').toLowerCase()}`}
              direction="row"
              items="center"
              spacing={16}
            >
              <Avatar
                src={`/static/avatars/avatar_default.jpg`}
                alt={`${supplier.name}'s profile picture`}
                size={40}
              />
              <Typography as="div" text={supplier.name} size={14} variant="primary" noWrap />
            </Stack>
          </TableCell>
          <TableCell>{supplier.location}</TableCell>
          <TableCell>{supplier.address}</TableCell>
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
