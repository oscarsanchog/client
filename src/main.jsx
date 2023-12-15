import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
// import { theme } from './styles/themeOptions.js'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './styles/index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#E14761',
      },
    secondary: {
      main: '#e2bcbc',
    },
    background: {
      paper: '#272822',
      default: '#272822',
    },
  },
}) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
