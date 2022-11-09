import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import UserModalDetail from './UserModalDetail'
// redux action
import { deleteUser, getUsers } from '../../../redux/actions/userAction'

// ----------------------------------------------------------------------

export default function UserList() {
  const auth = useSelector((state) => state.auth.user)
  const { isLoading, users, startIndex, endIndex, totalRecords, totalPages } = useSelector(
    (state) => state.user
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
    dispatch(getUsers(`?page=${page}&keyword=${keyword}`))
  }

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(getUsers(`?page=0&keyword=${keyword}`))
    setPage(0)
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
      const newSelecteds = users.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  // open user modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  useEffect(() => {
    dispatch(getUsers(`?page=${page}&keyword=${keyword}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const label = [{ name: 'Name' }, { name: 'Role' }, { name: 'Status' }, { name: '' }]

  return (
    <>
      <TableList>
        <TableListToolbar
          isLoading={isLoading}
          placeholder="Search user..."
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
              rowCount={users.length}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableListBody data={users} loading={isLoading}>
              {users &&
                users.map((user) => {
                  const isItemSelected = isSelected(user.name)
                  return (
                    user.id !== auth.id && (
                      <TableRow hover key={user.id}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(e) => handleClick(e, user.name)}
                          />
                        </TableCell>
                        <TableCell>
                          <Stack
                            onClick={() => onClickDetail(user.id)}
                            direction="row"
                            items="center"
                            spacing={16}
                            sx={{ cursor: 'pointer' }}
                          >
                            <AvatarName name={user.fullName} />
                            <Box sx={{ textAlign: 'left' }}>
                              <Typography
                                as="div"
                                text={user.fullName}
                                weight="500"
                                variant="primary"
                                noWrap
                              />
                              <Typography
                                as="div"
                                text={`@${user.username}`}
                                size={14}
                                variant="secondary"
                                noWrap
                              />
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>{user.role.name}</TableCell>
                        <TableCell>
                          <Typography
                            text={user.status ? 'Active' : 'Nonactive'}
                            size={12}
                            weight="700"
                            sx={{
                              display: 'inline-flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '24px',
                              padding: '0 8px',
                              borderRadius: theme.size.rounded.small,
                              backgroundColor:
                                (user.status && `${theme.color.green.main}14`) ||
                                (!user.status && `${theme.color.yellow.main}14`),
                              color:
                                (user.status && theme.color.green.main) ||
                                (!user.status && theme.color.yellow.main),
                            }}
                          />
                        </TableCell>
                        <TableCell padding="more" sx={{ textAlign: 'right' }}>
                          {auth.roleId === 1 && (
                            <TableListMoreMenu
                              id={user.id}
                              edit="user"
                              deleteTitle="Delete user"
                              deleteMessage="This can’t be undone and it will be permanently removed from data."
                              deleteSelected={`${user.fullName} - ${user.username}`}
                              deleteAction={deleteUser(user.id)}
                            />
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  )
                })}
            </TableListBody>
          </Table>
        </Scrollbar>
      </TableList>

      {openDetail && <UserModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
