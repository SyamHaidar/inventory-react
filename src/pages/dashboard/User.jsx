// component
import { Header, Page } from '../../components'
//
import UserList from '../../sections/dashboard/user/UserList'

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="User -">
      <Header title="User" />
      <UserList />
    </Page>
  )
}
