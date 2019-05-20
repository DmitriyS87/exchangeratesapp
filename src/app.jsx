import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/main.less';

const app = (props) => {
  const { text } = props;
  return (
    <span className={styles.text}>{text}</span>
  );
};

app.propTypes = {
  text: PropTypes.string.isRequired,
};

export default app;
