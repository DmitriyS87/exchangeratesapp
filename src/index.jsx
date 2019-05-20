import React from 'react';
import ReactDOM from 'react-dom';
import style from './style/main.less';

// eslint-disable-next-line import/extensions
import App from './app.jsx';

const entry = document.querySelector('.app');
const text = 'make it easy';

ReactDOM.render(
  <App text={text} style={style} />, entry,
);
