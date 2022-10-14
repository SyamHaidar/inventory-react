// style
import { RootStyle } from './style'
// component
import ScrollToTop from './components/ScrollToTop'
// routes
import Router from './routes'

// ----------------------------------------------------------------------

function App() {
  return (
    <>
      <RootStyle />
      <ScrollToTop />
      <Router />
    </>
  )
}

export default App
