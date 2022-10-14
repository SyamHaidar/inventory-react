// style
import { Stack, Typography } from '../../style'
// component
import { Container, Header, Page } from '../../components'
//
import UserModalAdd from '../../sections/dashboard/user/UserModalAdd'
import UserList from '../../sections/dashboard/user/UserList'

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="User -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Typography
            as="h1"
            text="Users"
            size={20}
            weight="700"
            variant="primary"
            sx={{ padding: '18px 0' }}
          />
          <Stack direction="row" items="center" spacing={8}>
            <UserModalAdd />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <UserList />
      </Container>
    </Page>
  )
}
