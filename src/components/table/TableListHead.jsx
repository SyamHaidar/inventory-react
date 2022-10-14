// style
import { Checkbox, TableCell, TableHead, TableRow, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function TableListHead({ label }) {
  return (
    <TableHead>
      <TableRow
        sx={{
          '& > th': {
            backgroundColor: theme.color.light,
            textAlign: 'left',
          },
          '& > :first-of-type': {
            borderTopLeftRadius: theme.size.rounded.main,
            borderBottomLeftRadius: theme.size.rounded.main,
            boxShadow: `${theme.color.paper} 8px 0px 0px inset`,
          },
          '& > :last-child': {
            borderTopRightRadius: theme.size.rounded.main,
            borderBottomRightRadius: theme.size.rounded.main,
            boxShadow: `${theme.color.paper} -8px 0px 0px inset`,
          },
        }}
      >
        <TableCell as="th" scope="col" padding="checkbox">
          <Checkbox />
        </TableCell>
        {label.map((label) => (
          <TableCell as="th" key={label.name}>
            <Typography as="div" text={label.name} size={14} weight="500" variant="primary" />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
