import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// style
import { Box, Checkbox, Stack, Table, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import {
  AvatarName,
  Scrollbar,
  TableList,
  TableListBody,
  TableListHead,
  TableListMoreMenu,
  TableListToolbar,
} from '../../../components'
// redux action
import { deleteOrder, getOrders } from '../../../redux/actions/orderAction'

// ----------------------------------------------------------------------

export default function OrderList() {
  const { isLoading, orders, startIndex, endIndex, totalRecords, totalPages } = useSelector(
    (state) => state.order
  )
  const dispatch = useDispatch()

  const [page, setPage] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [selected, setSelected] = useState([])

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
    dispatch(getOrders(`?page=${page}&keyword=${keyword}`))
  }

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(getOrders(`?page=0&keyword=${keyword}`))
    setSelected([])
  }

  const handleClick = (e, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = orders.map((n) => n.id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  useEffect(() => {
    dispatch(getOrders(`?page=${page}&keyword=${keyword}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const label = [
    { name: 'Invoice' },
    { name: 'Date' },
    { name: 'Quantity' },
    { name: 'Status', align: 'center' },
    { name: '' },
  ]

  return (
    <TableList>
      <TableListToolbar
        isLoading={isLoading}
        placeholder="Search order..."
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
          <TableListHead
            label={label}
            checkbox
            rowCount={orders.length}
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableListBody data={orders} loading={isLoading}>
            {orders &&
              orders.map((order) => {
                const isItemSelected = isSelected(order.id)
                return (
                  <TableRow hover key={order.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(e) => handleClick(e, order.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        as={Link}
                        to={`/dashboard/order/invoice/${encodeURIComponent(order.invoice)}`}
                        direction="row"
                        items="center"
                        spacing={16}
                      >
                        <AvatarName name={order.supplier.name} />
                        <Box>
                          <Typography
                            as="div"
                            text={order.supplier.name}
                            weight="500"
                            variant="primary"
                            noWrap
                          />
                          <Typography text={order.invoice} variant="secondary" noWrap />
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography text={moment.unix(order.date).format('DD MMM Y')} noWrap />
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Typography
                        text={order.status ? 'IN' : 'OUT'}
                        size={12}
                        weight="700"
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '24px',
                          width: '52px',
                          borderRadius: theme.size.rounded.small,
                          textTransform: 'uppercase',
                          backgroundColor:
                            (order.status === true && `${theme.color.green.main}14`) ||
                            (order.status === false && `${theme.color.red.main}14`),
                          color:
                            (order.status === true && `${theme.color.green.main}`) ||
                            (order.status === false && `${theme.color.red.main}`),
                        }}
                      />
                    </TableCell>
                    <TableCell padding="more" sx={{ textAlign: 'right' }}>
                      <TableListMoreMenu
                        id={order.id}
                        edit="order"
                        deleteTitle="Delete order"
                        deleteMessage="This can’t be undone and it will be permanently removed from data."
                        deleteSelected={`${order.invoice} - ${order.supplier.name}`}
                        deleteAction={deleteOrder(order.id)}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableListBody>
        </Table>
      </Scrollbar>
    </TableList>
  )
}
