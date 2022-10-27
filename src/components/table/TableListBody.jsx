// style
import { Box, TableBody, TableCell, TableRow } from '../../style'
// component
import Spinner from '../loading/Spinner'

// ----------------------------------------------------------------------

export default function TableListBody({ children, data }) {
  return (
    <TableBody>
      {!data ? (
        <TableRow>
          <TableCell colSpan="12">
            <Spinner height={128} />
          </TableCell>
        </TableRow>
      ) : !data.length ? (
        <TableRow>
          <TableCell colSpan="12">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '128px',
              }}
            >
              No Data
            </Box>
          </TableCell>
        </TableRow>
      ) : (
        <>{children}</>
      )}
    </TableBody>
  )
}
