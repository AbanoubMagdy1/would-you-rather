import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import store from './store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/would-you-rather">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
