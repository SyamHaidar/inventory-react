// style
import { Avatar, BackDrop, Box, IconButton, Stack, Sticky, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function DashboardHeader() {
  return (
    <Sticky sx={{ top: 0, zIndex: 50 }}>
      <Box sx={{ display: 'block' }}>
        <BackDrop height={64} sx={{ padding: '0 32px' }}>
          <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', maxWidth: '720px', marginRight: '8px' }}>
              <IconButton icon="arrow-left" size="medium" />
            </Box>
            <Stack direction="row" items="center" spacing={8}>
              <IconButton icon="notification" size="medium" />
              <Stack
                direction="row"
                items="center"
                sx={{
                  padding: '2px',
                  '&:hover': {
                    boxShadow: `0 0 0 1px ${theme.color.brand.main}`,
                    borderRadius: theme.size.rounded.full,
                    cursor: 'pointer',
                    transition: '.3s',
                  },
                }}
              >
                <Avatar
                  src={'/static/avatars/avatar_default.png'}
                  alt={`'s profile picture`}
                  size={40}
                />
                <Box
                  sx={{
                    display: 'none',
                    '@media (min-width: 576px)': {
                      display: 'block',
                    },
                  }}
                >
                  <Stack direction="column" sx={{ margin: '0 12px' }}>
                    <Typography
                      as="h4"
                      text="Anya Forger"
                      size={14}
                      weight="700"
                      variant="primary"
                      sx={{ whiteSpace: 'nowrap' }}
                    />
                    <Typography text="Super Anya" size={12} sx={{ whiteSpace: 'nowrap' }} />
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </BackDrop>
      </Box>
    </Sticky>
  )
}
