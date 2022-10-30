import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
// style
import { Avatar, Box, Card, Stack, SvgIcon, theme, Typography } from '../../../style'
// component
import { Container, Header, Page, Spinner } from '../../../components'
// redux action
import { getSupplier } from '../../../redux/actions/supplierAction'
import SupplierProductList from '../../../sections/dashboard/supplier/SupplierProductList'

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

export default function SupplierDetail() {
  const supplier = useSelector((state) => state.supplier.detail)
  const dispatch = useDispatch()

  const { name } = useParams()

  useEffect(() => {
    dispatch(getSupplier(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return !supplier ? (
    <Spinner />
  ) : (
    <Page title={`${supplier.name} -`}>
      <Header title={`${supplier.name}`} goBack />
      <Container
        sx={{
          padding: '0 16px 80px',
          '@media (min-width:576px)': {
            padding: '0 16px 16px',
          },
        }}
      >
        <Wrapper>
          <UserCard>
            <Card sx={{ position: 'sticky', top: '80px', padding: '48px 24px' }}>
              <Stack direction="column" items="center" spacing={16}>
                <Box>
                  <PictureWrapper>
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
                    <Stack direction="row" items="flex-start" spacing={12}>
                      <SvgIcon
                        icon="location"
                        size={16}
                        variant="primary"
                        sx={{ marginTop: '2px', flexShrink: '0' }}
                      />
                      <Typography text={`${supplier.address}, ${supplier.location}`} size={14} />
                    </Stack>
                    <Stack direction="row" items="flex-start" spacing={12}>
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
              <Box sx={{ padding: '24px' }}>
                <Typography text="Product list" weight="700" variant="primary" />
              </Box>
              <SupplierProductList data={supplier.product} />
            </Card>
          </Box>
        </Wrapper>
      </Container>
    </Page>
  )
}
