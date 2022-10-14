import { Link } from 'react-router-dom'
// style
import { Box, Button, Stack, Typography } from '../style'
// component
import { Container, Logo, Page } from '../components'

// -----------------------------------------------------------------------------

export default function Login() {
  return (
    <Page title="Page not found &ndash; ">
      <Box sx={{ position: 'absolute', top: 0, padding: '24px 24px 0' }}>
        <Logo />
      </Box>

      <Container>
        <Stack
          direction="column"
          justify="center"
          items="center"
          spacing={16}
          sx={{
            textAlign: 'center',
            minHeight: '100vh',
            width: '100%',
            maxWidth: '480px',
            margin: 'auto',
          }}
        >
          <Typography text="Page not found" size={30} weight="700" variant="primary" />
          <Typography
            as="p"
            text="Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
          />
          <Box>
            <Box
              as="img"
              src="/static/illustrations/404.svg"
              alt="page not found"
              width={320}
              sx={{
                margin: '40px 0',
                '@media (min-width: 576px)': { margin: '80px 0' },
              }}
            />
          </Box>
          <Button
            as={Link}
            to={'/'}
            text="Back to home"
            variant="primary"
            height="large"
            sx={{ marginTop: '24px' }}
          />
        </Stack>
      </Container>
    </Page>
  )
}
