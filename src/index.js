import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/900-italic.css';

import RouteSwitch from './RouteSwitch';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/navbar/Navbar'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f97316',
      darker: '#c2410c',
    },
    neutral: {
      main: '#737373',
      contrastText: '#fafafa',
    },
    black: {
      main: '#171717'
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouteSwitch></RouteSwitch>
    </ThemeProvider>
  </React.StrictMode>
);