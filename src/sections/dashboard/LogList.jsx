import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { TableCell, TableRow } from '../../style'
// component
import { TableList } from '../../components'
// redux action
import { getLogs } from '../../redux/actions/logAction'
import moment from 'moment'

// ----------------------------------------------------------------------

export default function LogList() {
  const log = useSelector((state) => state.log.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const label = [
    { name: 'Address' },
    { name: 'Method' },
    { name: 'Url' },
    { name: 'Code' },
    { name: 'Content' },
    { name: 'Time' },
    { name: 'Date' },
  ]

  console.log(log)

  return (
    <TableList search="Search log..." label={label} data={log}>
      {log &&
        log.map((log, index) => (
          <TableRow hover key={log.id}>
            <TableCell padding="checkbox">{index + 1}</TableCell>
            <TableCell>{log.remoteAddress}</TableCell>
            <TableCell>{log.requestMethod}</TableCell>
            <TableCell>{log.requestUrl}</TableCell>
            <TableCell>{log.statusCode}</TableCell>
            <TableCell>{log.contentLength}</TableCell>
            <TableCell>{log.responseTime}</TableCell>
            <TableCell>{moment.unix(log.createdAt).format('DD MMM Y')}</TableCell>
          </TableRow>
        ))}
    </TableList>
  )
}
