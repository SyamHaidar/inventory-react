import { Link } from 'react-router-dom'
// style
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  theme,
  Typography,
} from '../../../style'
// component
import { Scrollbar, Search, TableListHead } from '../../../components'
// data
import { Users } from '../../../data'
//
import UserMoreMenu from './UsertMoreMenu'

// ----------------------------------------------------------------------

export default function UserList() {
  const TABLE_HEAD = [{ name: 'Name' }, { name: 'Email' }, { name: 'Role' }, { name: '' }]

  return (
    <Card>
      <Stack justify="space-between" items="center" sx={{ padding: '24px' }}>
        <Box sx={{ width: '100%', maxWidth: '320px', marginRight: '32px' }}>
          <Search placeholder="Search order..." />
        </Box>
        <Stack
          direction="row"
          items="center"
          spacing={8}
          sx={{ '@media (max-width: 768px)': { display: 'none!important' } }}
        >
          <Button startIcon="download" text="PDF" variant="outline" />
          <Button startIcon="download" text="CSV" variant="outline" />
        </Stack>
        <IconButton
          icon="more"
          size="medium"
          sx={{ '@media (min-width: 768px)': { display: 'none!important' } }}
        />
      </Stack>
      <Scrollbar>
        <Table>
          <TableListHead label={TABLE_HEAD} />
          <TableBody>
            {Users.map((item, index) => (
              <TableRow hover key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell as="th">
                  <Stack
                    as={Link}
                    to="/dashboard/user/detail"
                    direction="row"
                    items="center"
                    spacing={16}
                  >
                    <Avatar
                      src={`/static/avatars/avatar_${index + 1}.jpg`}
                      alt={`${item}'s product picture`}
                      size={40}
                    />
                    <Typography as="div" text={item.name} size={14} variant="primary" noWrap />
                  </Stack>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Box sx={{ padding: '0 16px' }}>
                    <UserMoreMenu />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
      <Stack
        justify="flex-end"
        items="center"
        sx={{ borderTop: `1px solid ${theme.color.border}`, padding: '24px' }}
      >
        <Typography text="Rows per page: 10" size={14} variant="primary" />
      </Stack>
    </Card>
  )
}
