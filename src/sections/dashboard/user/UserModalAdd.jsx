import { useState } from 'react'
import { useDispatch } from 'react-redux'
// style
import { Stack, TextField } from '../../../style'
// component
import { FormModalAdd } from '../../../components'
// redux component
import { createUser } from '../../../redux/actions/userAction'

// ----------------------------------------------------------------------

export default function UserModalAdd({ open, isOpen }) {
  const dispatch = useDispatch()

  const initState = { fullName: '', password: '', roleId: '2' }
  const [body, setBody] = useState(initState)

  // disabled button save if data empty
  const handleSave = !body.fullName || body.password.length < 6

  // handle change body
  const handleChange = (e, str) => {
    // str variable is used for input validation
    setBody({ ...body, [e.target.name]: !str ? e.target.value : e.target.value.replace(str, '') })
  }

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(body))
    // clear state & close modal
    setBody(initState)
    isOpen()
  }

  // input form field
  const FORM_FIELD = [
    {
      label: 'Name',
      name: 'fullName',
      type: 'text',
      value: body.fullName,
      onChange: (e) => handleChange(e, /[^a-z 0-9]/gi),
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: body.password,
      onChange: (e) => handleChange(e, ''),
    },
  ]

  return (
    <>
      {open && (
        <FormModalAdd
          title="user"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
        >
          <Stack direction="column" spacing={20}>
            {FORM_FIELD.map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                required
                value={field.value}
                onChange={field.onChange}
              />
            ))}
          </Stack>
        </FormModalAdd>
      )}
    </>
  )
}
