// component
import { Container, Header, Page } from '../../components'
//
import UserList from '../../sections/dashboard/user/UserList'

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="User -">
      <Header title="User" />
      <Container sx={{ margin: '16px 0' }}>
        <UserList />
      </Container>
    </Page>
  )
}
