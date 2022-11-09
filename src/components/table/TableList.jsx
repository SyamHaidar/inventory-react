// style
import { Card } from '../../style'
// component
import { Container } from '../'

// ----------------------------------------------------------------------

export default function TableList({ children }) {
  return (
    <Container
      sx={{
        height: 'calc(100vh - 128px)',
        padding: '0 16px 16px',
        '@media (min-width:576px)': {
          height: 'calc(100vh - 64px)',
        },
      }}
    >
      <Card sx={{ display: 'flex!important', flexDirection: 'column', height: '100%' }}>
        {children}
      </Card>
    </Container>
  )
}
