import React from 'react';
import PropTypes from 'prop-types';

const ExchangeTable = (props) => {
  const { exchangePairs } = props;

  return (
    <div className="exchange__table">
      <div key="row0" className="exchange__row exchange__row-header">
        <div key="#" className="exchange__cell">#</div>
        <div key="from" className="exchange__cell">from</div>
        <div key="to" className="exchange__cell">to</div>
        <div key="rate" className="exchange__cell">rate</div>
        <div key="bid" className="exchange__cell">bid</div>
        <div key="ask" className="exchange__cell">ask</div>
        <div key="date" className="exchange__cell">date</div>
      </div>
      {exchangePairs.map((pair, idx) => (
        <div key={`row${  idx  }${1}`} className="exchange__row exchange__row-data">
          <div key={`#${idx }${1}`} className="exchange__cell">{idx + 1}</div>
          <div key={`from${idx }${1}`} className="exchange__cell">{pair.from}</div>
          <div key={`to${idx}${1}`} className="exchange__cell">{pair.to}</div>
          <div key={`rate${idx }${1}`} className="exchange__cell">{pair.rate}</div>
          <div key={`bid${idx }${1}`} className="exchange__cell">{pair.bid}</div>
          <div key={`ask${idx}${1}`} className="exchange__cell">{pair.ask}</div>
          <div key={`date${idx }${1}`} className="exchange__cell">{pair.date}</div>
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
