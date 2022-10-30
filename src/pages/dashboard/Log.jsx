// component
import { Header, Page } from '../../components'
import LogList from '../../sections/dashboard/LogList'

// ----------------------------------------------------------------------

export default function Notification() {
  return (
    <Page title="Log -">
      <Header title="Log" />
      <LogList />
    </Page>
  )
}
