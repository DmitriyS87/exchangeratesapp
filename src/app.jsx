/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Title from './components/title.jsx';
import Controls from './components/controlls.jsx';
import ExchangeTable from './components/exchange-table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickAdd() {
    console.log(this);
  }

  render() {
    const { data, currencies } = this.props;
    console.log(data.fromCurrencyCode);

    return (
      <React.Fragment>
        <Title />
        <Controls currensies={currencies} onClick={this.handleClickAdd} />
        <ExchangeTable exchangePairs={data} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
