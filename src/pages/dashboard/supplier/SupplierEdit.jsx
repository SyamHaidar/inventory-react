import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// style
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  SvgIcon,
  TextField,
  theme,
  Typography,
} from '../../../style'
// component
import { Container, Header, Page, Spinner } from '../../../components'
// redux action
import { editSupplier, updateSupplier } from '../../../redux/actions/supplierAction'

// ----------------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const PictureWrapper = styled.div`
  border-radius: ${theme.size.rounded.full};
  border: 1.5px dashed ${theme.color.border};
  padding: 8px;
`

const UserCard = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-right: 0;
  margin-bottom: 16px;
  @media (min-width: 992px) {
    margin-right: 16px;
    width: 360px;
  }
`

// ----------------------------------------------------------------------

export default function SupplierEdit() {
  const supplier = useSelector((state) => state.supplier.detail)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()

  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateSupplier({ id, body, navigate }))
  }

  const handleCancel = () => {
    navigate('/dashboard/supplier')
  }

  const handleChange = (e, str) => {
    setBody({
      ...body,
      [e.target.name]: !str ? e.target.value : e.target.value.replace(str, ''),
    })
  }

  const getSupplier = async () => {
    const { payload } = await dispatch(editSupplier(id))
    if (payload === null) {
      navigate('/dashboard/supplier')
    } else {
      setBody(payload)
    }
  }

  useEffect(() => {
    getSupplier()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const TEXT_FIELD = [
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
      onChange: (e) => handleChange(e, /[^a-z, ]/gi),
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

  return !supplier ? (
    <Spinner />
  ) : (
    <Page title={`Edit - ${supplier.name} -`}>
      <Header title={supplier.name} goBack />
      <Container sx={{ margin: '16px 0' }}>
        <Wrapper>
          <UserCard>
            <Card sx={{ position: 'sticky', top: '80px', padding: '48px 24px' }}>
              <Stack direction="column" items="center" spacing={16}>
                <Box>
                  <PictureWrapper className="profile">
                    <Avatar
                      src={'/static/avatars/avatar_default.jpg'}
                      name={`${supplier.name}'s profile picture`}
                      size={128}
                    />
                  </PictureWrapper>
                </Box>
                <Stack direction="column" spacing={40} sx={{ width: '100%' }}>
                  <Typography
                    as="h3"
                    text={supplier.name}
                    size={18}
                    weight="700"
                    variant="primary"
                    sx={{ textAlign: 'center' }}
                  />
                  <Stack direction="column" spacing={16}>
                    <Stack direction="row" items="flex-start" spacing={16}>
                      <SvgIcon
                        icon="location"
                        size={16}
                        variant="primary"
                        sx={{ marginTop: '2px', flexShrink: '0' }}
                      />
                      <Typography text={`${supplier.address}, ${supplier.location}`} size={14} />
                    </Stack>
                    <Stack direction="row" items="flex-start" spacing={16}>
                      <SvgIcon
                        icon="call"
                        size={16}
                        variant="primary"
                        sx={{ marginTop: '2px', flexShrink: '0' }}
                      />
                      <Typography text={supplier.mobile} size={14} />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </UserCard>
          <Box sx={{ width: '100%' }}>
            <Card>
              <Stack direction="column" spacing={20} sx={{ padding: '24px' }}>
                {TEXT_FIELD.map((field) => (
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
                <Stack direction="row" justify="flex-end" spacing={12} sx={{ marginTop: '32px' }}>
                  <Button onClick={handleCancel} text="Cancel" variant="light" size="medium" />
                  <Button
                    onClick={handleSubmit}
                    text="Save changes"
                    variant="brand"
                    size="medium"
                  />
                </Stack>
              </Stack>
            </Card>
          </Box>
        </Wrapper>
      </Container>
    </Page>
  )
}
