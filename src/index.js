import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// router & helmet
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
// react-scrollbar css
import 'simplebar/src/simplebar.css'

// ----------------------------------------------------------------------

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
