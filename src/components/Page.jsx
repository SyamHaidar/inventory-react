import { Helmet } from 'react-helmet-async'
// style
import { Box } from '../style'

// -----------------------------------------------------------------------------

export default function Page({ children, title = '' }) {
  return (
    <>
      <Helmet>
        <title>{`${title} MyInven.io`}</title>
      </Helmet>

      <Box>{children}</Box>
    </>
  )
}
