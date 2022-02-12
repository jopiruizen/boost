import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import './theme/index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './store';
import themes from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  </Provider>,
document.getElementById('root')
);
