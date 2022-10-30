// style
import { TableCell, TableHead, TableRow, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function TableListHead({ label }) {
  return (
    <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
      <TableRow
        sx={{
          '& > th': {
            backgroundColor: theme.color.light,
          },
        }}
      >
        <TableCell as="th" padding="checkbox" sx={{ textAlign: 'left' }}>
          #
        </TableCell>
        {label.map((label) => (
          <TableCell as="th" key={label.name} sx={{ textAlign: label.align || 'left' }}>
            <Typography as="div" text={label.name} size={14} weight="500" variant="secondary" />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
