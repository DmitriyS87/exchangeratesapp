import React from 'react';
import PropTypes from 'prop-types';
import MESSAGE_CONSTANT from '../constants/message.constant';

const StatusMessage = (props) => {
  const { message, error } = props;
  const messageStyle = ((error === '') ? '' : MESSAGE_CONSTANT.STYLE_ERROR);
  return (
    <span className={`controls__item controls__text ${messageStyle}`}>
      {message}
    </span>
  );
};

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default StatusMessage;
