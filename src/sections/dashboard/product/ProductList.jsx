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
import ProductModalDetail from './ProductModalDetail'
// redux action
import { deleteProduct, getProducts } from '../../../redux/actions/productAction'

// ----------------------------------------------------------------------

export default function ProductList() {
  const { isLoading, products, startIndex, endIndex, totalRecords, totalPages } = useSelector(
    (state) => state.product
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
    dispatch(getProducts(`?page=${page}&keyword=${keyword}`))
  }

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(getProducts(`?page=0&keyword=${keyword}`))
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
      const newSelecteds = products.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  // open product modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  useEffect(() => {
    dispatch(getProducts(`?page=${page}&keyword=${keyword}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const label = [
    { name: 'Product' },
    { name: 'Supplier' },
    { name: 'Category' },
    { name: 'Qty' },
    { name: '' },
  ]

  return (
    <>
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
            <TableListHead
              label={label}
              checkbox
              rowCount={products.length}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableListBody data={products} loading={isLoading}>
              {products &&
                products.map((product) => {
                  const isItemSelected = isSelected(product.name)
                  return (
                    <TableRow hover key={product.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={(e) => handleClick(e, product.name)}
                        />
                      </TableCell>
                      <TableCell>
                        <Stack
                          onClick={() => onClickDetail(product.id)}
                          direction="row"
                          items="center"
                          spacing={16}
                          sx={{ cursor: 'pointer' }}
                        >
                          <AvatarName name={product.name} />
                          <Typography
                            text={product.name}
                            weight="500"
                            variant="primary"
                            lineClamp="1"
                            sx={{ maxWidth: '200px' }}
                          />
                        </Stack>
                      </TableCell>
                      <TableCell>{product.supplier.name}</TableCell>
                      <TableCell>{product.category.name ? product.category.name : '-'}</TableCell>
                      <TableCell>{product.quantity ? product.quantity : '0'}</TableCell>
                      <TableCell padding="more" sx={{ textAlign: 'right' }}>
                        <TableListMoreMenu
                          id={product.id}
                          edit="product"
                          deleteTitle="Delete product"
                          deleteMessage="This can’t be undone and it will be permanently removed from data."
                          deleteSelected={`${product.name} - ${product.supplier.name}`}
                          deleteAction={deleteProduct(product.id)}
                        />
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableListBody>
          </Table>
        </Scrollbar>
      </TableList>

      {openDetail && <ProductModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
