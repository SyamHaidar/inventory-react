import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// style
import { Box, Stack, TableCell, TableRow, theme, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteUser, getUsers } from '../../../redux/actions/userAction'
import { initialName } from '../../../utils'

// ----------------------------------------------------------------------

export default function UserList() {
  const user = useSelector((state) => state.user.data)
  const auth = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  // sort data by latest add
  const newUser = [...user]
  const userData = newUser.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))

  useEffect(() => {
    dispatch(getUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const label = [{ name: 'Name' }, { name: 'Role' }, { name: 'Status' }, { name: '' }]

  return (
    <TableList search="Search user..." label={label} data={user}>
      {userData.map((user, index) => (
        <TableRow hover key={user.id}>
          <TableCell padding="checkbox">{index + 1}</TableCell>
          <TableCell>
            <Stack
              as={Link}
              to={`/dashboard/user/@${user.username}`}
              direction="row"
              items="center"
              spacing={16}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.color.brand.main,
                  borderRadius: theme.size.rounded.full,
                  color: theme.color.text.contrast,
                  height: '40px',
                  width: '40px',
                  fontSize: '15px',
                  fontWeight: '700',
                }}
              >
                <Typography as="h4" text={initialName(user.fullName)} noWrap />
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography as="div" text={user.fullName} weight="500" variant="primary" noWrap />
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
          <TableCell>{user.status ? 'Active' : 'Nonactive'}</TableCell>
          <TableCell padding="more" sx={{ textAlign: 'right' }}>
            {auth.roleId === 1 && (
              <TableListMoreMenu id={user.id} edit="user" deleteAction={deleteUser(user.id)} />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  )
}
