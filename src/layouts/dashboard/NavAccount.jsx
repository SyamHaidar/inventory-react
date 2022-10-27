import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// component
import { Overlay } from '../../components'
// style
import { Avatar, Box, Button, Modal, Stack, theme, Typography } from '../../style'
// redux action
import { authSignout } from '../../redux/actions/authAction'
import { Link } from 'react-router-dom'

// ----------------------------------------------------------------------

const Wrapper = styled.div`
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    inset: 0;
    box-shadow: 0 0 0 1px ${theme.color.border};
    border-radius: ${theme.size.rounded.full};
    margin: -2px;
    transition: 0.3s;
  }

  &:hover::before {
    box-shadow: 0 0 0 1px ${theme.color.brand.main};
  }

  &.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    &:before {
      content: ' ';
      position: absolute;
      inset: 0;
      border-radius: ${theme.size.rounded.full};
      margin: -4px;
      transition: 0.3s;
      box-shadow: 0 0 0 2px ${theme.color.border};
    }
  }
`

const PictureWrapper = styled.div`
  border-radius: ${theme.size.rounded.full};
  border: 1.5px dashed ${theme.color.border};
  padding: 8px;
`

// ----------------------------------------------------------------------

export default function NavAccount() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const isOpen = () => setOpen(!open)

  return (
    <>
      <Stack
        onClick={() => setOpen(true)}
        justify="center"
        sx={{ width: '100', cursor: 'pointer' }}
      >
        <Wrapper>
          <Avatar
            size={40}
            src={'/static/avatars/avatar_default.jpg'}
            alt={`${user.fullName}'s profile picture`}
          />
        </Wrapper>
      </Stack>

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal sx={{ padding: '52px 24px 24px' }}>
            <Stack direction="column" items="center">
              <PictureWrapper>
                <Avatar
                  src={'/static/avatars/avatar_default.jpg'}
                  alt={`${user.fullName}'s profile picture`}
                  size={128}
                />
              </PictureWrapper>
              <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
                <Typography as="h3" text={user.fullName} size={20} weight="700" variant="primary" />
                <Typography text={user.role.name} size={14} />
              </Box>
            </Stack>

            <Stack
              direction="column"
              justify="center"
              items="center"
              spacing={12}
              sx={{ marginTop: '32px' }}
            >
              <Button
                onClick={isOpen}
                as={Link}
                to={`/dashboard/user/@${user.username}`}
                text="Profile"
                variant="outline"
                size="medium"
                width
              />
              <Button
                onClick={() => {
                  isOpen()
                  dispatch(authSignout())
                }}
                text="Logout"
                variant="outline"
                size="medium"
                width
              />
              <Button onClick={isOpen} text="Cancel" variant="outline" size="medium" width />
            </Stack>
          </Modal>
        </Overlay>
      )}
    </>
  )
}
