import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTable = (props) => {
  const { exchangePairs } = props;
  return (
    <div ClassName="exchange__table">
      <div ClassName="exchange__row exchange__row-header">
        <div ClassName="exchange__cell">#</div>
        <div ClassName="exchange__cell">from</div>
        <div ClassName="exchange__cell">to</div>
        <div ClassName="exchange__cell">rate</div>
        <div ClassName="exchange__cell">bid</div>
        <div ClassName="exchange__cell">ask</div>
        <div ClassName="exchange__cell">data</div>
      </div>
      {exchangePairs.map((pair, idx) => (
        <div ClassName="exchange__row exchange__row-data">
          <div ClassName="exchange__cell">{idx + 1}</div>
          <div ClassName="exchange__cell">{pair.from}</div>
          <div ClassName="exchange__cell">{pair.to}</div>
          <div ClassName="exchange__cell">{pair.rate}</div>
          <div ClassName="exchange__cell">{pair.bid}</div>
          <div ClassName="exchange__cell">{pair.ask}</div>
          <div ClassName="exchange__cell">{pair.data}</div>
        </div>
      ))
      }
    </div>
  );
};

ExchangeTable.propTypes = {
  exchangePairs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExchangeTable;
