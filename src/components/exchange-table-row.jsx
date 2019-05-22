/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTableRow = (props) => {
  const {
    children = '', style = 'exchange__row-data', count = 0, onClick,
  } = props;
  return (
    <div className={`exchange__row ${style}`} onClick={() => onClick(count)}>
      {children}
    </div>
  );
};

ExchangeTableRow.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ExchangeTableRow;
