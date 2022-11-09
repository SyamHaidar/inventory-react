import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Checkbox, Stack, Table, TableCell, TableRow, Typography } from '../../../style'
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
import SupplierModalDetail from './SupplierModalDetail'
// redux action
import { deleteSupplier, getSuppliers } from '../../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

export default function SupplierList() {
  const { isLoading, suppliers, startIndex, endIndex, totalRecords, totalPages } = useSelector(
    (state) => state.supplier
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
    dispatch(getSuppliers(`?page=${page}&keyword=${keyword}`))
  }

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(getSuppliers(`?page=0&keyword=${keyword}`))
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
      const newSelecteds = suppliers.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  // open supplier modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  useEffect(() => {
    dispatch(getSuppliers(`?page=${page}&keyword=${keyword}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const label = [{ name: 'Name' }, { name: 'Address' }, { name: 'Mobile' }, { name: '' }]

  return (
    <>
      <TableList>
        <TableListToolbar
          isLoading={isLoading}
          placeholder="Search supplier..."
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
              rowCount={suppliers.length}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableListBody data={suppliers} loading={isLoading}>
              {suppliers.map((supplier) => {
                const isItemSelected = isSelected(supplier.name)
                return (
                  <TableRow hover key={supplier.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(e) => handleClick(e, supplier.name)}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        onClick={() => onClickDetail(supplier.id)}
                        direction="row"
                        items="center"
                        spacing={16}
                        sx={{ cursor: 'pointer' }}
                      >
                        <AvatarName name={supplier.name} />
                        <Typography
                          as="div"
                          text={supplier.name}
                          size={14}
                          variant="primary"
                          noWrap
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>{`${supplier.address}, ${supplier.location}`}</TableCell>
                    <TableCell>{supplier.mobile}</TableCell>
                    <TableCell padding="more" sx={{ textAlign: 'right' }}>
                      <TableListMoreMenu
                        id={supplier.id}
                        edit="supplier"
                        deleteTitle="Delete supplier"
                        deleteMessage="This can’t be undone and it will be permanently removed from data."
                        deleteSelected={`${supplier.name} - ${supplier.location}`}
                        deleteAction={deleteSupplier(supplier.id)}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableListBody>
          </Table>
        </Scrollbar>
      </TableList>
      {openDetail && <SupplierModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
