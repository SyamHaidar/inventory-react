import { useState } from 'react'
import { useSelector } from 'react-redux'
// style
import { Box, Card, Stack, theme, Typography } from '../../style'
// component
import { AvatarName } from '../../components'
//
import UserModalDetail from './user/UserModalDetail'

// ----------------------------------------------------------------------

export default function WidgetUser() {
  const { users } = useSelector((state) => state.user)

  // open user modal detail
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState('')

  const handleOpenDetail = () => setOpenDetail(!openDetail)

  const onClickDetail = (str) => {
    handleOpenDetail()
    setDetail(str)
  }

  return (
    <>
      <Stack direction="column" spacing={16}>
        <Typography
          text="Users"
          size={18}
          weight="700"
          variant="primary"
          sx={{ borderLeft: `3px solid ${theme.color.cyan.main}`, paddingLeft: '16px' }}
        />
        <Box sx={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Stack direction="row" items="center" spacing={16}>
            {users.slice(0, 10).map((user) => (
              <Card key={user.id} sx={{ padding: '40px 16px', width: '100%', minWidth: '240px' }}>
                <Stack direction="column" items="center" spacing={16}>
                  <Box
                    sx={{
                      border: `1px dashed ${theme.color.border}`,
                      borderRadius: theme.size.rounded.full,
                      padding: '8px',
                    }}
                  >
                    <AvatarName name={user.fullName} size={64} fontSize={24} />
                  </Box>
                  <Stack direction="column" items="center" spacing={4}>
                    <Typography
                      onClick={() => onClickDetail(user.id)}
                      as="h2"
                      text={user.fullName}
                      size={18}
                      weight="700"
                      variant="primary"
                      lineClamp="1"
                      sx={{ maxWidth: '200px', cursor: 'pointer' }}
                    />
                    <Typography text={`@${user.username}`} size={14} />
                    <Stack direction="row" items="center" spacing={8} sx={{ paddingTop: '12px' }}>
                      <Typography
                        text={user.role.name}
                        size={12}
                        weight="700"
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '24px',
                          padding: '0 8px',
                          borderRadius: theme.size.rounded.small,
                          backgroundColor: theme.color.light,
                        }}
                      />
                      <Typography text="&bull;" />
                      <Typography
                        text={user.status ? 'Active' : 'Nonactive'}
                        size={12}
                        weight="700"
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '24px',
                          padding: '0 8px',
                          borderRadius: theme.size.rounded.small,
                          backgroundColor:
                            (user.status && `${theme.color.green.main}14`) ||
                            (!user.status && `${theme.color.yellow.main}14`),
                          color:
                            (user.status && theme.color.green.main) ||
                            (!user.status && theme.color.yellow.main),
                        }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>

      {openDetail && <UserModalDetail open={handleOpenDetail} name={detail} />}
    </>
  )
}
