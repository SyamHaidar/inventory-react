import { useNavigate } from 'react-router-dom'
// style
import { BackDrop, IconButton, Stack, Sticky, Typography } from '../style'
//
import Container from './Container'
import NavAccount from '../layouts/dashboard/NavAccount'

// ----------------------------------------------------------------------

export default function Header({ title, goBack = false, height }) {
  const navigate = useNavigate()

  return (
    <Sticky sx={{ top: 0, zIndex: 10, height: (height && `${height}px`) || '64px' }}>
      <BackDrop sx={{ display: 'block', height: '100%' }}>
        <Container>
          <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
            <Stack direction="row" items="center" spacing={8}>
              {goBack && <IconButton onClick={() => navigate(-1)} icon="arrow-left" />}
              <Typography
                as="h1"
                text={title}
                size={18}
                weight="700"
                variant="primary"
                lineClamp="1"
                sx={{ maxWidth: '360px', '@media (max-width: 768px)': { maxWidth: '180px' } }}
              />
            </Stack>
            <Stack direction="row" items="center" spacing={12}>
              {/* <IconButton icon="notification" size="medium" /> */}
              <NavAccount />
            </Stack>
          </Stack>
        </Container>
      </BackDrop>
    </Sticky>
  )
}
