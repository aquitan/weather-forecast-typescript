import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store'

const themeLight = createTheme({
  palette: {
    background: {
      default: '#fff'
    },
    mode: 'light'
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <App />
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>
);
