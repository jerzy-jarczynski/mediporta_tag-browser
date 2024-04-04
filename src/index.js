import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
