import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// style
import { Avatar, Box, Button, Card, Stack, TextField, theme, Typography } from '../../../style'
// component
import { Container, Header, Page, Spinner } from '../../../components'
// redux action
import { editUser, updateUser } from '../../../redux/actions/userAction'

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

export default function UserEdit() {
  const user = useSelector((state) => state.user.detail)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()

  const [body, setBody] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({ id, body, navigate }))
  }

  const handleCancel = (e) => {
    navigate('/dashboard/user')
  }

  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value })
  }

  const fetchUser = async () => {
    const { payload } = await dispatch(editUser(id))
    setBody(payload)
  }

  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return !user ? (
    <Spinner />
  ) : (
    <Page title={`Edit - @${user.username} -`}>
      <Header title={`@${user.username}`} goBack />
      <Container sx={{ margin: '16px 0' }}>
        <Wrapper>
          <UserCard>
            <Card sx={{ position: 'sticky', top: '80px', padding: '48px 24px' }}>
              <Stack direction="column" items="center">
                <PictureWrapper>
                  <Avatar
                    src={'/static/avatars/avatar_default.jpg'}
                    name={`${user.fullName}'s profile picture`}
                    size={128}
                  />
                </PictureWrapper>
                <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
                  <Typography
                    as="h3"
                    text={user.fullName}
                    size={20}
                    weight="700"
                    variant="primary"
                  />
                  <Typography text={user.role.name} size={14} />
                </Box>
              </Stack>
            </Card>
          </UserCard>
          <Box sx={{ width: '100%' }}>
            <Card>
              <Stack direction="column" spacing={20} sx={{ padding: '24px' }}>
                <TextField
                  label="Full name"
                  name="fullName"
                  type="text"
                  required
                  value={body.fullName}
                  onChange={handleChange}
                />
                <TextField
                  label="Username"
                  name="username"
                  type="text"
                  required
                  value={body.username}
                  onChange={handleChange}
                />
                <TextField label="Status" name="status" type="text" required value="Active" />
                <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
                  <Button onClick={handleCancel} text="Cancel" variant="light" size="medium" />
                  <Button
                    onClick={handleSubmit}
                    text="Save changes"
                    variant="brand"
                    size="medium"
                  />
                </Stack>
              </Stack>
            </Card>
          </Box>
        </Wrapper>
      </Container>
    </Page>
  )
}
