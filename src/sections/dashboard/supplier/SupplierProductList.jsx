// style
import { Table, TableBody, TableCell, TableRow, Typography } from '../../../style'
// component
import { TableListHead } from '../../../components'

// ----------------------------------------------------------------------

export default function SupplierProductList({ data }) {
  const label = [{ name: '#' }, { name: 'Product' }]

  return (
    <Table>
      <TableListHead label={label} />
      <TableBody>
        {!data ? (
          <TableRow>
            <TableCell colSpan="12">No product</TableCell>
          </TableRow>
        ) : (
          <>
            {data.map((item, index) => (
              <TableRow hover key={item.id}>
                <TableCell padding="checkbox">{index + 1}</TableCell>
                <TableCell>
                  <Typography text={item.name} size={14} variant="primary" noWrap />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  )
}
