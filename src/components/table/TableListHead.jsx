// style
import { Checkbox, TableCell, TableHead, TableRow, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function TableListHead({
  label,
  checkbox,
  rowCount,
  numSelected,
  onSelectAllClick,
}) {
  return (
    label && (
      <TableHead sx={{ position: 'sticky', top: 0, zIndex: 2 }}>
        <TableRow
          sx={{
            '& > th': {
              backgroundColor: theme.color.paper,
              borderBottom: `1px solid ${theme.color.border}`,
            },
          }}
        >
          {checkbox && (
            <TableCell as="th" padding="checkbox">
              <Checkbox
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                sx={{ padding: '0 8px!important' }}
              />
            </TableCell>
          )}
          {label.map((label, index) => (
            <TableCell as="th" key={index} sx={{ textAlign: label.align || 'left' }}>
              <Typography as="div" text={label.name} size={14} weight="500" variant="secondary" />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  )
}
