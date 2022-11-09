import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// style
import { Stack, TextField } from '../../../style'
// redux action
import {
  createSupplier,
  editSupplier,
  getSuppliers,
  updateSupplier,
} from '../../../redux/actions/supplierAction'
// component
import { FormModalAdd } from '../../../components'

// ----------------------------------------------------------------------

export default function SupplierModalAdd({ id, open, isOpen, isEdit }) {
  const dispatch = useDispatch()

  const initState = { name: '', location: '', address: '', mobile: '' }
  const [body, setBody] = useState(initState)

  // disabled button save if data empty
  const handleSave = !body.name || !body.location || !body.address || !body.mobile

  // handle change body
  const handleChange = (e, str) => {
    // str variable is used for input validation
    setBody({
      ...body,
      [e.target.name]: !str ? e.target.value : e.target.value.replace(str, ''),
    })
  }

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isEdit) {
      await dispatch(createSupplier(body))
    } else {
      await dispatch(updateSupplier({ id, body }))
    }
    await dispatch(getSuppliers())
    // clear state & close modal
    setBody(initState)
    isOpen()
  }

  const fetchSupplier = async () => {
    const { payload } = await dispatch(editSupplier(id))
    setBody({
      name: payload.name,
      location: payload.location,
      address: payload.address,
      mobile: payload.mobile,
    })
  }

  useEffect(() => {
    if (isEdit) {
      fetchSupplier()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit])

  // input form field with onChnage validation
  const FORM_FIELD = [
    {
      label: 'Supplier name',
      name: 'name',
      value: body.name,
      onChange: (e) => handleChange(e, /[^a-z 0-9]/gi),
    },
    {
      label: 'Location',
      name: 'location',
      value: body.location,
      onChange: (e) => handleChange(e, /[^a-z ,z]/gi),
    },
    {
      label: 'Address',
      name: 'address',
      value: body.address,
      onChange: (e) => handleChange(e, ''),
    },
    {
      label: 'Mobile',
      name: 'mobile',
      value: body.mobile,
      onChange: (e) => handleChange(e, /\D/gi),
    },
  ]

  return (
    <>
      {open && (
        <FormModalAdd
          title="supplier"
          open={isOpen}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
        >
          <Stack
            as="form"
            onSubmit={handleSubmit}
            direction="column"
            spacing={20}
            sx={{ flex: 'auto' }}
          >
            {FORM_FIELD.map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                type="text"
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
