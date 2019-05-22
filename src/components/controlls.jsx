/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import CONTROLS_CONSTANTS from '../constants/controlls.constant';

class Controlls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.currensies[0],
      to: props.currensies[0],
    };
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
  }

  handleChangeFrom(evt) {
    this.setState({ from: evt.target.value });
  }

  handleChangeTo(evt) {
    this.setState({ to: evt.target.value });
  }

  render() {
    const { onClick, children } = this.props;
    const { from, to } = this.state;

    const constantsFrom = CONTROLS_CONSTANTS.FROM;
    const constantsTo = CONTROLS_CONSTANTS.TO;

    return (
      <section className="controls">
        <div className="controls__container">
          <span className="controls__title">
            {CONTROLS_CONSTANTS.TITLE}
          </span>
        </div>
        <div className="controls__container">
          <div key="controlsItemFrom" className="controls__item">
            <span className="controls__text">
              {constantsFrom}
            </span>
            <select key="constantsFrom" className="controls__select" value={from} onChange={this.handleChangeFrom}>
              {CONTROLS_CONSTANTS.CURRENCIES.map(currency => <option key={constantsFrom + currency.currencyCode} value={currency.currencyCode}>{currency.currencyName}</option>)}
            </select>
          </div>
          <div key="controlsItemTo" className="controls__item">
            <span className="controls__text">
              {constantsTo}
            </span>
            <select key="constantsTo" className="controls__select" value={to} onChange={this.handleChangeTo}>
              {CONTROLS_CONSTANTS.CURRENCIES.map(currency => <option key={constantsTo + currency.currencyCode} value={currency.currencyCode}>{currency.currencyName}</option>)}
            </select>
          </div>
          <div className="controls__item">
            <button type="button" className="controls__button" onClick={() => { onClick(this.state); }}>{CONTROLS_CONSTANTS.BUTTON_TITLE}</button>
          </div>
          {children}
        </div>

      </section>
    );
  }
}

Controlls.propTypes = {
  currensies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Controlls;
