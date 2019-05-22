import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/extensions
import App from './app.jsx';
import data, { CURRENCIES, RESPONSE } from './mocks/response.mock';
import DataParcer from './utils/data-parser';

const entry = document.querySelector('.app');

ReactDOM.render(
  <App data={DataParcer.parseCurrencyPair(RESPONSE)} currencies={CURRENCIES} />, entry,
);
