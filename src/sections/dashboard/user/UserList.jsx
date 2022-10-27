import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// style
import { Avatar, Checkbox, Stack, TableCell, TableRow, Typography } from '../../../style'
// component
import { TableList, TableListMoreMenu } from '../../../components'
// redux action
import { deleteUser, getUsers } from '../../../redux/actions/userAction'

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

  const label = [
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Role' },
    { name: 'Status' },
    { name: '' },
  ]

  return (
    <TableList label={label} data={user}>
      {userData.map((user) =>
        auth.roleId !== 1 ? (
          user.roleId !== 1 && (
            <TableRow hover key={user.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell as="th">
                <Stack
                  as={Link}
                  to={`/dashboard/user/@${user.username}`}
                  direction="row"
                  items="center"
                  spacing={16}
                >
                  <Avatar
                    src={`/static/avatars/avatar_default.jpg`}
                    alt={`${user.name}'s profile picture`}
                    size={40}
                  />
                  <Typography as="div" text={user.fullName} size={14} variant="primary" noWrap />
                </Stack>
              </TableCell>
              <TableCell>{`@${user.username}`}</TableCell>
              <TableCell>{user.role.name}</TableCell>
              <TableCell>{user.status ? 'Active' : 'Nonactive'}</TableCell>
              <TableCell padding="more" sx={{ textAlign: 'right' }}>
                {auth.roleId === 1 && (
                  <TableListMoreMenu id={user.id} edit="user" deleteAction={deleteUser(user.id)} />
                )}
              </TableCell>
            </TableRow>
          )
        ) : (
          <TableRow hover key={user.id}>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell as="th">
              <Stack
                as={Link}
                to={`/dashboard/user/@${user.username}`}
                direction="row"
                items="center"
                spacing={16}
              >
                <Avatar
                  src={`/static/avatars/avatar_default.jpg`}
                  alt={`${user.name}'s profile picture`}
                  size={40}
                />
                <Typography as="div" text={user.fullName} size={14} variant="primary" noWrap />
              </Stack>
            </TableCell>
            <TableCell>{`@${user.username}`}</TableCell>
            <TableCell>{user.role.name}</TableCell>
            <TableCell>{user.status ? 'Active' : 'Nonactive'}</TableCell>
            <TableCell padding="more" sx={{ textAlign: 'right' }}>
              {auth.roleId === 1 && (
                <TableListMoreMenu id={user.id} edit="user" deleteAction={deleteUser(user.id)} />
              )}
            </TableCell>
          </TableRow>
        )
      )}
    </TableList>
  )
}
