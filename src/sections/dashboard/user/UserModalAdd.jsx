import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// style
import { Box, Stack, TextField, theme, Typography } from '../../../style'
// component
import { FormModalAdd } from '../../../components'
import SelectList from '../SelectList'
// redux action
import { createUser, editUser, getUsers, updateUser } from '../../../redux/actions/userAction'

// ----------------------------------------------------------------------

export default function UserModalAdd({ id, open, isOpen, isEdit }) {
  const dispatch = useDispatch()

  // const [edit,setEdit] =useState()
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [statusName, setStatusName] = useState('Select status')

  const body = { fullName: fullName, password: password, roleId: '2', status: status }

  // form modal status toggle
  const [openStatus, setOpenStatus] = useState(false)
  const isOpenStatus = () => setOpenStatus(!openStatus)

  // disabled button save if data empty
  const handleSave = !isEdit ? !body.fullName || body.password.length < 6 : !body.fullName

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isEdit) {
      await dispatch(createUser(body))
    } else {
      await dispatch(updateUser({ id, body }))
    }
    await dispatch(getUsers())
    // clear state & close modal
    setFullName('')
    setPassword('')
    setStatus('')
    setStatusName('Select status')
    isOpen()
  }

  const fetchUser = async () => {
    const { payload } = await dispatch(editUser(id))
    setFullName(payload.fullName)
    setStatus(payload.status)
    setStatusName(payload.status ? 'Active' : 'Nonactive')
  }

  useEffect(() => {
    if (isEdit) {
      fetchUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  // status user value
  const selectStatus = [
    { status: true, name: 'Active', color: 'green' },
    { status: false, name: 'Nonactive', color: 'yellow' },
  ]

  return (
    <>
      {open && (
        <FormModalAdd
          title="user"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        >
          <Stack direction="column" spacing={20}>
            <TextField
              label="Full name"
              name="fullName"
              type="text"
              required
              readOnly={isEdit}
              disabled={isEdit}
              value={fullName}
              onChange={(e) => setFullName(e.target.value.replace(/[^a-z 0-9]/gi, ''))}
            />
            {!isEdit && (
              <TextField
                label="Password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <TextField
              onClick={isOpenStatus}
              label="Status"
              name="status"
              type="text"
              required
              readOnly
              value={statusName}
            />
          </Stack>
        </FormModalAdd>
      )}

      {/* select status modal */}
      {openStatus && (
        <SelectList open={isOpenStatus} title="status">
          <Stack direction="column" spacing={4}>
            {selectStatus.map((status, index) => (
              <Stack
                key={index}
                onClick={() => {
                  setStatus(status.status)
                  setStatusName(status.name)
                  isOpenStatus()
                }}
                direction="row"
                items="center"
                spacing={8}
                sx={{
                  padding: '8px 12px',
                  borderRadius: theme.size.rounded.main,
                  '&:hover': {
                    backgroundColor: `${theme.color.light}99`,
                    cursor: 'pointer',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: `${theme.color[status.color].main}99`,
                    borderRadius: theme.size.rounded.full,
                    height: '8px',
                    width: '8px',
                    flexShrink: 0,
                  }}
                />
                <Typography text={status.name} size={14} weight="500" variant="primary" />
              </Stack>
            ))}
          </Stack>
        </SelectList>
      )}
    </>
  )
}
