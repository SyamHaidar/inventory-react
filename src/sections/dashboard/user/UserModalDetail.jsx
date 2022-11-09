import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { Box, IconButton, Modal, Stack, theme, Typography } from '../../../style'
// component
import { AvatarName, Overlay, Scrollbar } from '../../../components'
import UserActivityList from './UserActivityList'
// redux action
import { getUser } from '../../../redux/actions/userAction'

// ----------------------------------------------------------------------

export default function UserModalDetail({ open, name }) {
  const { isLoading, user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const isUser = user.user
  const isLog = user.logs

  useEffect(() => {
    open && dispatch(getUser(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return isLoading || !isUser ? (
    ''
  ) : (
    <Overlay open={open}>
      <Modal position="right">
        <Stack
          justify="space-between"
          items="center"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            height: '56px',
            backgroundColor: theme.color.paper,
            padding: '0 16px',
          }}
        >
          <Typography as="h4" text="User detail" size={18} weight="700" variant="primary" />
          <IconButton onClick={open} icon="close" />
        </Stack>
        <Scrollbar>
          <Stack direction="column" spacing={24}>
            <Stack direction="row" items="flex-start" spacing={16} sx={{ padding: '24px 16px 0' }}>
              <AvatarName name={isUser.fullName} size={64} fontSize={24} />
              <Stack direction="column" spacing={4}>
                <Typography
                  as="h2"
                  text={isUser.fullName}
                  size={18}
                  weight="700"
                  variant="primary"
                />
                <Typography text={`@${isUser.username}`} size={14} />
                <Stack direction="row" items="center" spacing={8} sx={{ paddingTop: '12px' }}>
                  <Typography
                    text={isUser.role.name}
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
                    text={isUser.status ? 'Active' : 'Nonactive'}
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
                        (isUser.status && `${theme.color.green.main}14`) ||
                        (!isUser.status && `${theme.color.yellow.main}14`),
                      color:
                        (isUser.status && theme.color.green.main) ||
                        (!isUser.status && theme.color.yellow.main),
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Box>
              <UserActivityList data={isLog.data} />
            </Box>
          </Stack>
        </Scrollbar>
      </Modal>
    </Overlay>
  )
}
