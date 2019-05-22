import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTable = (props) => {
  const { children = '' } = props;

  return (
    <div className="exchange__table">
      {children}
    </div>
  );
};

ExchangeTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExchangeTable;
