import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  // You can customize the theme here, for example:
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
createRoot(document.getElementById('root')).render(
 
<ThemeProvider theme={theme}>
<Provider store={store}>
<BrowserRouter>
    <App />
 
  </BrowserRouter>
</Provider>
</ThemeProvider>
)
