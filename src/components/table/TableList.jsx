// style
import { Box, Card, IconButton, Stack, Table, theme, Typography } from '../../style'
// component
import { Scrollbar, Search, TableListBody, TableListHead } from '../'

// ----------------------------------------------------------------------

export default function TableList({ children, label, data }) {
  return (
    <Card>
      <Stack justify="space-between" items="center" sx={{ padding: '24px' }}>
        <Box sx={{ width: '100%', maxWidth: '320px', marginRight: '32px' }}>
          <Search placeholder="Search order..." />
        </Box>
        {/* <Stack direction="row" items="center" spacing={8}>
          <IconButton icon="more" />
        </Stack> */}
      </Stack>

      <Scrollbar>
        <Table>
          <TableListHead label={label} />
          <TableListBody data={data}>{children}</TableListBody>
        </Table>
      </Scrollbar>

      <Stack
        direction="row"
        justify="flex-end"
        items="center"
        spacing={8}
        sx={{ borderTop: `1px solid ${theme.color.border}`, padding: '12px 24px' }}
      >
        <Typography text="1 - 10 of 10" size={12} variant="primary" />
        <IconButton icon="arrow-left-2" iconSize={14} />
        <IconButton icon="arrow-right-2" iconSize={14} />
      </Stack>
    </Card>
  )
}
