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
import SelectList from '../../../sections/dashboard/SelectList'

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

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [status, setStatus] = useState('')
  const [statusName, setStatusName] = useState('Select status')

  const body = { fullName: fullName, username: username, roleId: '2', status: status }

  // form modal status toggle
  const [openStatus, setOpenStatus] = useState(false)
  const isOpenStatus = () => setOpenStatus(!openStatus)

  // status order value
  const selectStatus = [
    { status: true, name: 'Active' },
    { status: false, name: 'Nonactive' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({ id, body, navigate }))
    // clear state & close modal
    setFullName('')
    setUsername('')
    setStatus('')
    setStatusName('Select status')
  }

  const handleCancel = (e) => {
    navigate('/dashboard/user')
  }

  const fetchUser = async () => {
    const { payload } = await dispatch(editUser(id))
    setFullName(payload.fullName)
    setUsername(payload.username)
    setStatus(payload.status)
    setStatusName(payload.status ? 'Active' : 'Nonactive')
  }

  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return !user ? (
    <Spinner />
  ) : (
    <>
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value.replace(/[^a-z 0-9]/gi, ''))}
                  />
                  <TextField
                    label="Username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value.replace(/[^a-z0-9_]/gi, ''))}
                  />
                  <TextField
                    onClick={isOpenStatus}
                    label="Status"
                    name="status"
                    type="text"
                    required
                    readOnly
                    value={statusName}
                  />
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

      {/* select status modal */}
      {openStatus && (
        <SelectList open={openStatus} isOpen={isOpenStatus} title="status">
          <Stack direction="column" spacing={4}>
            {selectStatus.map((status, index) => (
              <Typography
                key={index}
                onClick={() => {
                  setStatus(status.status)
                  setStatusName(status.name)
                  isOpenStatus()
                }}
                as="div"
                text={status.name}
                size={14}
                weight="500"
                variant="primary"
                sx={{
                  padding: '8px 24px',
                  '&:hover': {
                    backgroundColor: `${theme.color.light}99`,
                    cursor: 'pointer',
                  },
                }}
              />
            ))}
          </Stack>
        </SelectList>
      )}
    </>
  )
}
