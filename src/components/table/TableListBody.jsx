// style
import { Stack, TableBody, TableCell, TableRow, theme } from '../../style'
// component
import Spinner from '../loading/Spinner'

// ----------------------------------------------------------------------

export default function TableListBody({ children, data, loading }) {
  return (
    <TableBody sx={{ color: theme.color.text.primary }}>
      {loading ? (
        <TableRow>
          <TableCell colSpan="12">
            <Spinner height={128} />
          </TableCell>
        </TableRow>
      ) : !data.length ? (
        <TableRow>
          <TableCell colSpan="12">
            <Stack justify="center" items="center" sx={{ textAlign: 'center', height: '128px' }}>
              No Data
            </Stack>
          </TableCell>
        </TableRow>
      ) : (
        <>{children}</>
      )}
    </TableBody>
  )
}
