import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// style
import { Avatar, Box, Card, Stack, SvgIcon, theme, Typography } from '../../../style'
// component
import { Container, Header, Page, Spinner } from '../../../components'
import UserListActivity from '../../../sections/dashboard/user/UserListActivity'
// redux action
import { getUser } from '../../../redux/actions/userAction'

// ----------------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const PictureWrapper = styled.div`
  border-radius: ${theme.size.rounded.full};
  border: 1.5px dashed ${theme.color.border};
  padding: 8px;
`

const UserCard = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-right: 0;
  margin-bottom: 16px;
  @media (min-width: 992px) {
    margin-right: 16px;
    width: 360px;
  }
`

// ----------------------------------------------------------------------

export default function UserDetail() {
  const user = useSelector((state) => state.user.detail)
  const dispatch = useDispatch()

  const { username } = useParams()

  useEffect(() => {
    dispatch(getUser(username))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  return !user ? (
    <Spinner />
  ) : (
    <Page title={`${user.fullName} (@${user.username}) -`}>
      <Header title={`@${user.username}`} goBack />
      <Container
        sx={{
          padding: '0 16px 80px',
          '@media (min-width:576px)': {
            padding: '0 16px 16px',
          },
        }}
      >
        <Wrapper>
          <UserCard>
            <Card sx={{ position: 'sticky', top: '80px', padding: '48px 24px' }}>
              <Stack direction="column" items="center" spacing={16}>
                <PictureWrapper>
                  <Avatar
                    src={'/static/avatars/avatar_default.jpg'}
                    name={`${user.fullName}'s profile picture`}
                    size={128}
                  />
                </PictureWrapper>
                <Stack direction="column" spacing={40} sx={{ width: '100%' }}>
                  <Typography
                    as="h3"
                    text={user.fullName}
                    size={18}
                    weight="700"
                    variant="primary"
                    sx={{ textAlign: 'center' }}
                  />
                  <Stack direction="row" justify="center" items="flex-start" spacing={12}>
                    <SvgIcon
                      icon="key"
                      size={16}
                      variant="primary"
                      sx={{ marginTop: '2px', flexShrink: '0' }}
                    />
                    <Typography text={user.role.name} size={14} />
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </UserCard>
          <Box sx={{ width: '100%' }}>
            <Card>
              <Box sx={{ padding: '24px' }}>
                <Typography text="Activity" weight="700" variant="primary" />
              </Box>
              <UserListActivity />
            </Card>
          </Box>
        </Wrapper>
      </Container>
    </Page>
  )
}
