import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Box, Button, Grid, Stack, TextField, theme, Typography } from '../style'
// component
import { Footer, Logo, Page } from '../components'
import { authSignin } from '../redux/actions/authAction'

// -----------------------------------------------------------------------------

export default function Login() {
  const { auth } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [body, setBody] = useState({ username: '', password: '' })

  const handleLoginButton = !body.username || body.password.length < 6

  // handle change body
  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    setMessage('')
    const { payload } = await dispatch(authSignin({ body, navigate }))
    setMessage(payload.message)
  }

  return auth ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <Page title="Welcome -">
      <Grid>
        <Stack
          direction="column"
          justify="center"
          items="center"
          sx={{ textAlign: 'center', minHeight: '100vh' }}
        >
          <Stack
            direction="column"
            sx={{
              height: '100%',
              width: '100%',
              padding: '52px 32px 0px',
              backgroundColor: theme.color.canvas,
              '@media (min-width: 992px)': {
                padding: '52px 80px 0px',
              },
            }}
          >
            <Stack direction="column" justify="center" spacing={32} sx={{ flex: 'auto' }}>
              <Stack direction="column" spacing={24}>
                <Logo height={40} />
                <Stack direction="column" spacing={4}>
                  <Typography
                    as="h2"
                    text="Welcome Back"
                    size={24}
                    weight="500"
                    variant="primary"
                  />
                  <Typography as="span" text="Sign in to continue to Wgs!" />
                </Stack>
              </Stack>

              {message && <Typography text={message} sx={{ color: theme.color.red.main }} />}

              <Stack direction="column" spacing={20}>
                <TextField
                  label="Username"
                  type="text"
                  name="username"
                  required
                  value={body.username}
                  onChange={handleChange}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  required
                  value={body.password}
                  onChange={handleChange}
                />
              </Stack>

              <Button
                type="submit"
                onClick={handleLogin}
                disabled={handleLoginButton}
                text="Sign in"
                variant="brand"
                size="medium"
                width
              />
            </Stack>

            <Footer />
          </Stack>
        </Stack>
        <Box
          sx={{
            height: '100%',
            padding: '16px',
            '@media (max-width: 768px)': {
              display: 'none',
            },
          }}
        >
          <Box
            as="video"
            autoPlay
            loop
            muted
            sx={{
              borderRadius: theme.size.rounded.main,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          >
            <Box as="source" src={'/static/home-video.mp4'} type="video/mp4" />
          </Box>
        </Box>
      </Grid>
    </Page>
  )
}
