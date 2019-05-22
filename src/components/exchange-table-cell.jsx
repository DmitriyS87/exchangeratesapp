import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTableCell = (props) => {
  const { title } = props;
  return (
    <div className="exchange__cell">{title}</div>
  );
};

ExchangeTableCell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ExchangeTableCell;
