import { ThemeOptions, createTheme } from '@mui/material/styles';

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