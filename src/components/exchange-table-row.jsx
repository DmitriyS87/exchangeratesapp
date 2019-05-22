import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTableRow = (props) => {
  const {
    children = '', style = 'exchange__row-data', count, onClick,
  } = props;
  return (
    <div className={`exchange__row ${style}`} onClick={() => onClick(count)}>
      {children}
    </div>
  );
};

ExchangeTableRow.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.node,
  style: PropTypes.string,
};

export default ExchangeTableRow;
