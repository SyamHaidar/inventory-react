import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// style
import { Stack, Table, TableCell, TableRow, theme, Typography } from '../../style'
// component
import {
  Scrollbar,
  TableList,
  TableListBody,
  TableListHead,
  TableListToolbar,
} from '../../components'
// redux action
import { getLogs } from '../../redux/actions/logAction'

// ----------------------------------------------------------------------

export default function LogList() {
  const { isLoading, logs, startIndex, endIndex, totalRecords, totalPages } = useSelector(
    (state) => state.log
  )
  const dispatch = useDispatch()

  const [page, setPage] = useState(0)
  const [keyword, setKeyword] = useState('')

  const disablePrevious = page === 0
  const disableNext = page + 1 === totalPages

  const onPrevious = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  const onNext = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const onRefresh = (e) => {
    e.preventDefault()
    dispatch(getLogs(`?page=${page}&keyword=${keyword}`))
  }

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(getLogs(`?page=0&keyword=${keyword}`))
    setPage(0)
  }

  useEffect(() => {
    dispatch(getLogs(`?page=${page}&keyword=${keyword}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const label = [
    { name: 'User' },
    { name: 'Address' },
    { name: 'Method' },
    { name: 'Url' },
    { name: 'Status', align: 'center' },
    { name: 'Time', align: 'right' },
    { name: 'Date & time', align: 'right' },
  ]

  return (
    <TableList>
      <TableListToolbar
        isLoading={isLoading}
        placeholder="Search product..."
        totalRecords={totalRecords}
        startIndex={startIndex}
        endIndex={endIndex}
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={onSearch}
        onPrevious={onPrevious}
        onNext={onNext}
        onRefresh={onRefresh}
        disablePrevious={disablePrevious}
        disableNext={disableNext}
      />
      <Scrollbar>
        <Table>
          <TableListHead label={label} />
          <TableListBody data={logs} loading={isLoading}>
            {logs &&
              logs.map((log) => (
                <TableRow
                  hover
                  key={log.id}
                  sx={{ color: log.statusCode >= 400 && `${theme.color.red.main}!important` }}
                >
                  <TableCell>
                    {log.user ? (
                      <Stack direction="row" items="center" spacing={4}>
                        <Typography text={`@${log.user.username}`} />
                        <Typography
                          text={log.user.role.name}
                          size={11}
                          variant="secondary"
                          noWrap
                          sx={{
                            padding: '2px 6px',
                            backgroundColor: theme.color.light,
                            borderRadius: theme.size.rounded.small,
                          }}
                        />
                      </Stack>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>{log.remoteAddress}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        log.statusCode >= 400
                          ? `${theme.color.red.main}!important`
                          : (log.requestMethod === 'GET' && theme.color.green.main) ||
                            (log.requestMethod === 'POST' && theme.color.yellow.main) ||
                            (log.requestMethod === 'DELETE' && theme.color.red.main),
                    }}
                  >
                    {log.requestMethod}
                  </TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>{log.requestUrl}</TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      color:
                        (log.statusCode >= 500 && theme.color.yellow.main) ||
                        (log.statusCode >= 400 && theme.color.red.main) ||
                        (log.statusCode >= 300 && theme.color.blue.main) ||
                        (log.statusCode >= 200 && theme.color.green.main),
                    }}
                  >
                    {log.statusCode}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {`${Math.round(log.responseTime)} ms`}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {moment.unix(log.createdAt).format('DD MMM Y, HH:mm')}
                  </TableCell>
                </TableRow>
              ))}
          </TableListBody>
        </Table>
      </Scrollbar>
    </TableList>
  )
}
