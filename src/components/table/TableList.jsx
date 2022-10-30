// style
import { Box, Card, IconButton, Stack, Table, theme, Typography } from '../../style'
// component
import { Container, Scrollbar, Search, TableListBody, TableListHead } from '../'

// ----------------------------------------------------------------------

export default function TableList({ children, label, data, search }) {
  return (
    <Container
      sx={{
        height: 'calc(100vh - 64px)',
        padding: '0 16px 80px',
        '@media (min-width:576px)': {
          padding: '0 16px 16px',
        },
      }}
    >
      <Card sx={{ display: 'flex!important', flexDirection: 'column', height: '100%' }}>
        <Stack justify="space-between" items="center" sx={{ padding: '16px' }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '180px',
              '@media (min-width:768px)': {
                maxWidth: '320px',
              },
            }}
          >
            <Search placeholder={search} />
          </Box>
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
          sx={{
            borderTop: `1px solid ${theme.color.border}`,
            padding: '12px 16px',
            marginTop: 'auto',
          }}
        >
          {/* <Typography text="1 - 10 of 10" size={12} variant="primary" />
          <IconButton icon="arrow-left-2" iconSize={14} />
          <IconButton icon="arrow-right-2" iconSize={14} /> */}
        </Stack>
      </Card>
    </Container>
  )
}
