import React from 'react';
import PropTypes from 'prop-types';

import CONTROLS_CONSTANTS from '../constants/controlls.constant';

class Controlls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }

  render() {
    const { currensies, onClick } = this.props;
    const { from, to } = this.state;

    return (
      <section className="controls">
        <div className="controls__container">
          <span className="controls__title">
            {CONTROLS_CONSTANTS.TITLE}
          </span>
        </div>
        <div className="controls__container">
          <div className="controls__item">
            <span className="controls__text">
              {CONTROLS_CONSTANTS.FROM}
            </span>
            <select className="controls__select">
              {currensies.map(currency => <option value={currency} selected={from === currency ? 'selected' : ''}>{currency}</option>)}
            </select>
          </div>
          <div className="controls__item">
            <span className="controls__text">
              {CONTROLS_CONSTANTS.TO}
            </span>
            <select className="controls__select">
              {currensies.map(currency => <option value={currency} selected={to === currency ? 'selected' : ''}>{currency}</option>)}
            </select>
          </div>
          <div className="controls__item">
            <button type="button" className="controls__button" onClick={onClick}>{CONTROLS_CONSTANTS.BUTTON_TITLE}</button>
          </div>
        </div>

      </section>
    );
  }
}

Controlls.propTypes = {
  currensies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Controlls;
