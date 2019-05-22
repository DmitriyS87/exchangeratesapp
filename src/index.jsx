import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/extensions
import App from './app.jsx';
import { CURRENCIES, RESPONSE } from './mocks/response.mock';
import DataParcer from './utils/data-parser';
import store from './utils/store';

const entry = document.querySelector('.app');

ReactDOM.render(
  <Provider store={store}>
    <App data={DataParcer.parseCurrencyPair(RESPONSE)} currencies={CURRENCIES} />
  </Provider>,
  entry,
);
