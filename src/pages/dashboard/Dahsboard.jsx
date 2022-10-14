// style
import { Grid, Typography } from '../../style'
// component
import { Container, Header, Page } from '../../components'
import WidgetSummary from '../../sections/dashboard/WidgetSummary'

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Dashboard -">
      <Header>
        <Typography
          as="h1"
          text="Dashboard"
          size={20}
          weight="700"
          variant="primary"
          sx={{ padding: '18px 0' }}
        />
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <Grid columns sm="2" lg="4" sx={{ marginBottom: '16px' }}>
          <WidgetSummary
            name="Order In"
            value="36,521"
            icon="arrow-left"
            color="green"
            iconSx={{ transform: ' rotate(-45deg)' }}
          />
          <WidgetSummary
            name="Order Out"
            value="4,085"
            icon="arrow-right"
            color="red"
            iconSx={{ transform: ' rotate(-45deg)' }}
          />
          <WidgetSummary name="Items" value="20,566" color="yellow" />
          <WidgetSummary name="User" value="1,565" icon="users" color="cyan" />
        </Grid>
      </Container>
    </Page>
  )
}
