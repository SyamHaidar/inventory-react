// style
import { Box, Button, Card, Grid, IconButton, Stack, theme, Typography } from '../../../style'
// component
import { Container, Header, Logo, Page } from '../../../components'

// ----------------------------------------------------------------------

export default function OrderDetail() {
  return (
    <Page title="Order detail -">
      <Header>
        <Stack direction="row" justify="space-between" items="center" sx={{ width: '100%' }}>
          <Stack direction="row" items="center" spacing={8}>
            <IconButton icon="arrow-left" />
            <Typography
              as="h1"
              text="Order detail"
              size={20}
              weight="700"
              variant="primary"
              sx={{ padding: '18px 0' }}
            />
          </Stack>
          <Stack direction="row" items="center" spacing={8}>
            <IconButton icon="eye" size="medium" />
            <IconButton icon="download" size="medium" />
            <Button startIcon="tick" text="Done" variant="outline" />
          </Stack>
        </Stack>
      </Header>
      <Container sx={{ margin: '16px 0 80px' }}>
        <Card sx={{ padding: '40px' }}>
          <Stack direction="column" spacing={40}>
            <Grid>
              <Box sx={{ marginBottom: '40px' }}>
                <Logo />
              </Box>
              <Box sx={{ marginBottom: '40px' }}>
                <Typography text="INV-17052" size={18} weight="700" variant="primary" />
              </Box>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography
                  text="INVOICE FROM"
                  size={12}
                  weight="700"
                  sx={{ marginBottom: '16px' }}
                />
                <Typography text="Walden Global Services (WGS)" size={14} variant="primary" />
                <Typography
                  text="Jl. Soekarno Hatta No.104, Kota Bandung, Jawa Barat 40223"
                  size={14}
                  variant="primary"
                />
                <Typography text="(022) 6034882" size={14} variant="primary" />
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography
                  text="INVOICE TO"
                  size={12}
                  weight="700"
                  sx={{ marginBottom: '16px' }}
                />
                <Typography text="Apple Inc." size={14} variant="primary" />
                <Typography text="Cupertino, CA 95014, U.S.A." size={14} variant="primary" />
                <Typography text="1-800-MY-APPLE" size={14} variant="primary" />
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography
                  text="DATE CREATE"
                  size={12}
                  weight="700"
                  sx={{ marginBottom: '16px' }}
                />
                <Typography text="05 October 2022" size={14} variant="primary" />
              </Stack>
              <Stack direction="column" sx={{ marginBottom: '40px' }}>
                <Typography
                  text="DUE CREATE"
                  size={12}
                  weight="700"
                  sx={{ marginBottom: '16px' }}
                />
                <Typography text="12 October 2022" size={14} variant="primary" />
              </Stack>
            </Grid>
            <table style={{ textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laptop</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Laptop</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Laptop</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Laptop</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
            <Grid
              sx={{
                borderTop: `1px solid ${theme.color.border}`,
                paddingTop: '24px',
                marginTop: '40px',
              }}
            >
              <Box>
                <Typography text="NOTES" size={14} weight="700" variant="primary" />
                <Typography
                  as="p"
                  text="This invoice is valid and processed by computer"
                  size={14}
                  variant="primary"
                />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography text={`Help & Question`} size={14} weight="700" variant="primary" />
                <Typography as="p" text="care@wgs.com" size={14} variant="primary" />
              </Box>
            </Grid>
          </Stack>
        </Card>
      </Container>
    </Page>
  )
}
