// style
import { Stack, Table, TableBody, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import { TableListHead } from '../../../components'
import moment from 'moment'

// ----------------------------------------------------------------------

export default function UserActivityList({ data }) {
  const label = [{ name: 'Activity' }]

  return (
    <Table>
      <TableListHead label={label} />
      <TableBody>
        {!data ? (
          <TableRow>
            <TableCell colSpan="12">No activities</TableCell>
          </TableRow>
        ) : (
          <>
            {data.map((log, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <Stack direction="row" items="center" spacing={8}>
                    <Typography
                      text={log.statusCode}
                      weight="700"
                      noWrap
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                        height: '40px',
                        width: '40px',
                        textAlign: 'center',
                        borderRadius: theme.size.rounded.full,
                        backgroundColor:
                          (log.statusCode >= 500 && `${theme.color.yellow.main}14`) ||
                          (log.statusCode >= 400 && `${theme.color.red.main}14`) ||
                          (log.statusCode >= 300 && `${theme.color.blue.main}14`) ||
                          (log.statusCode >= 200 && `${theme.color.green.main}14`),
                        color:
                          (log.statusCode >= 500 && theme.color.yellow.main) ||
                          (log.statusCode >= 400 && theme.color.red.main) ||
                          (log.statusCode >= 300 && theme.color.blue.main) ||
                          (log.statusCode >= 200 && theme.color.green.main),
                      }}
                    />

                    <Stack direction="column">
                      <Stack direction="row" items="center" spacing={8}>
                        <Typography
                          text={log.requestMethod}
                          noWrap
                          sx={{
                            color:
                              log.statusCode >= 400
                                ? `${theme.color.red.main}!important`
                                : (log.requestMethod === 'GET' && theme.color.green.main) ||
                                  (log.requestMethod === 'POST' && theme.color.yellow.main) ||
                                  (log.requestMethod === 'DELETE' && theme.color.red.main),
                          }}
                        />
                        <Typography text={log.requestUrl} variant="primary" noWrap />
                      </Stack>

                      <Typography
                        text={moment.unix(log.createdAt).format('DD MMM Y, HH:mm')}
                        variant="secondary"
                        noWrap
                      />
                    </Stack>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  )
}
