import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// data
import Admin from '../data/Admin'
// style
import { Box, Button, Divider, Stack, TextField, theme, Typography } from '../style'
// component
import { Footer, Logo, Page } from '../components'

// -----------------------------------------------------------------------------

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const loginHandle = !email || password.length < 6

  const onLogin = () => {
    if (email === Admin.email && password === Admin.password) {
      console.log('login')
      navigate('/dashboard')
    } else {
      setMessage('Incorrect email or password.')
    }
  }

  return (
    <Page title="Login &ndash; ">
      <Stack direction="row" spacing={-80} sx={{ backgroundColor: theme.color.light }}>
        <Stack
          direction="column"
          justify="center"
          items="center"
          sx={{
            textAlign: 'center',
            margin: '0 32px',
            minHeight: '100vh',
            zIndex: 1,
            '@media (max-width: 768px)': {
              width: '100%',
              margin: '0',
            },
          }}
        >
          <Stack
            direction="column"
            sx={{
              padding: '24px',
              height: '100%',
              width: '100%',
              margin: '0',
              backgroundColor: theme.color.canvas,
              boxShadow: theme.color.shadow.main,
              '@media (min-width: 576px)': {
                padding: '24px 80px',
              },
              '@media (min-width: 768px)': {
                borderRadius: theme.size.rounded.main,
                width: '600px',
                margin: '16px 0',
                padding: '40px 40px 16px',
              },
            }}
          >
            <Stack direction="column" spacing={32} sx={{ flex: 'auto' }}>
              <Stack direction="column" spacing={24}>
                <Logo height={40} sx />
                <Box>
                  <Typography
                    as="h2"
                    text="Sig in to WGS"
                    size={24}
                    weight="500"
                    variant="primary"
                  />
                  <Typography as="span" text="Enter your details below." />
                </Box>
              </Stack>

              {message && <Typography text={message} sx={{ color: theme.color.red.main }} />}

              <Stack direction="column" spacing={20}>
                <TextField
                  label="Email address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>

              <Button
                type="submit"
                onClick={onLogin}
                disabled={loginHandle}
                text="Sign in"
                variant="brand"
                height="medium"
                width="full"
              />

              <Divider text="OR" />

              <Stack direction="column" spacing={16}>
                <Button text="Login with Google" variant="outline" height="medium" width="full" />
              </Stack>
            </Stack>

            <Footer />
          </Stack>
        </Stack>
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            padding: '32px',
            '@media (max-width: 768px)': {
              display: 'none',
            },
          }}
        >
          <Box
            sx={{
              background: 'url(https://www.wgshub.com/assets/topbanner-about.png) no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
              borderRadius: theme.size.rounded.main,
            }}
          />
        </Box>
      </Stack>
    </Page>
  )
}
