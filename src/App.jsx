import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// style
import { RootStyle } from './style'
// component
import { ScrollToTop, LogoFull } from './components'
// routes
import Router from './routes'
// redux action
import { authCheck } from './redux/actions/authAction'

// ----------------------------------------------------------------------

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  const getAuth = async () => {
    await dispatch(authCheck())
    setLoading(false)
  }

  useEffect(() => {
    getAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.auth])

  return (
    <>
      <RootStyle />
      <ScrollToTop />
      {loading ? <LogoFull /> : <Router />}
    </>
  )
}

export default App
