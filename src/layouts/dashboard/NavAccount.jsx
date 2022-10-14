import { useState } from 'react'
import styled from 'styled-components/macro'
// component
import { Overlay } from '../../components'
// style
import { Avatar, Box, Button, Modal, Stack, theme, Typography } from '../../style'

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

// ----------------------------------------------------------------------

export default function NavAccount() {
  const [open, setOpen] = useState(false)

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
            src={'/static/avatars/avatar_default.png'}
            alt={`Anya's profile picture`}
          />
        </Wrapper>
      </Stack>

      {open && (
        <Overlay open={() => setOpen(false)}>
          <Modal sx={{ padding: '24px' }}>
            <Stack direction="column" items="center">
              <Wrapper className="profile">
                <Avatar
                  src={'/static/avatars/avatar_default.png'}
                  alt={`Anya's profile picture`}
                  size={128}
                />
              </Wrapper>
              <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
                <Typography as="h3" text="Anya Forger" size={20} weight="700" variant="primary" />
                <Typography text="Super Admin" size={14} />
              </Box>
            </Stack>

            <Stack
              direction="column"
              justify="center"
              items="center"
              spacing={12}
              sx={{ marginTop: '32px' }}
            >
              <Button text="Logout" variant="light" height="medium" width="full" />
              <Button
                onClick={() => setOpen(false)}
                text="Cancel"
                variant="outline"
                height="medium"
                width="full"
              />
            </Stack>
          </Modal>
        </Overlay>
      )}
    </>
  )
}
