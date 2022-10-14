import styled from 'styled-components/macro'
// style
import { Avatar, Box, Button, Card, IconButton, Stack, theme, Typography } from '../../../style'
// component
import { Container, Header, Page } from '../../../components'
//
import UserListActivity from '../../../sections/dashboard/user/UserListActivity'

// ----------------------------------------------------------------------

const Wrapper = styled.div`
  border-radius: ${theme.size.rounded.full};
  border: 1.5px dashed ${theme.color.border};
  padding: 8px;
`

// ----------------------------------------------------------------------

export default function UserDetail() {
  return (
    <Page title="Order detail -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Stack direction="row" items="center" spacing={8}>
            <IconButton icon="arrow-left" />
            <Typography
              as="h1"
              text="User detail"
              size={20}
              weight="700"
              variant="primary"
              sx={{ padding: '18px 0' }}
            />
          </Stack>
          <Stack direction="row" items="center" spacing={8}>
            <Button startIcon="edit" text="Edit" variant="outline" />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '@media (min-width: 992px)': {
              flexDirection: 'row',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              marginRight: '24px',
              flexShrink: 0,
              marginBottom: '24px',
              '@media (min-width: 992px)': {
                width: '360px',
              },
            }}
          >
            <Card sx={{ padding: '80px 24px' }}>
              <Stack direction="column" items="center">
                <Wrapper className="profile">
                  <Avatar
                    src={'/static/avatars/avatar_default.png'}
                    alt={`Anya's profile picture`}
                    size={128}
                  />
                </Wrapper>
                <Stack
                  direction="column"
                  items="center"
                  sx={{ marginTop: '16px', textAlign: 'center' }}
                >
                  <Typography as="h3" text="Anya Forger" size={20} weight="700" variant="primary" />
                  <Typography text="forger@email.com" />
                  <Typography text="Super Admin" size={14} sx={{ marginTop: '12px' }} />
                </Stack>
              </Stack>
            </Card>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Card>
              <Box sx={{ padding: '24px' }}>
                <Typography text="Activity" weight="700" variant="primary" />
              </Box>
              <UserListActivity />
            </Card>
          </Box>
        </Box>
      </Container>
    </Page>
  )
}
