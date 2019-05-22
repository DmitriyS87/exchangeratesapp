/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Title from './components/title.jsx';
import Controls from './components/controlls.jsx';
import StatusMessage from './components/status-message.jsx';
import ExchangeTable from './components/exchange-table.jsx';
import ExchangeTableRow from './components/exchange-table-row.jsx';
import ExchangeTableCell from './components/exchange-table-cell.jsx';
import { addCurrencyPair, deleteCurrencyPair, returnResolveNewPair } from './actions/actions';
import TABLE_CONSTANTS from './constants/table.constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRow = this.handleClickRow.bind(this);
  }

  handleClickAdd(newCurrencyPair) {
    const { addNewPair } = this.props;
    addNewPair(newCurrencyPair);
  }

  handleClickRow(id) {
    const { deletePair } = this.props;
    deletePair(id);
  }

  render() {
    const {
      data, currencies, message, error,
    } = this.props;

    return (
      <React.Fragment>
        <Title />
        <Controls currensies={currencies} onClick={this.handleClickAdd}>
          <StatusMessage message={message} error={error} />
        </Controls>
        <ExchangeTable>
          <ExchangeTableRow style={TABLE_CONSTANTS.HEADER_ROW_STYLE} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX}`}>
            {TABLE_CONSTANTS.TITLES.map((title, column) => <ExchangeTableCell title={title} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX}cell${column}`} />)}
          </ExchangeTableRow>
          {data.map((row, idx) => (
            <ExchangeTableRow count={idx} style={TABLE_CONSTANTS.DATA_ROWS_STYLE} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX + idx + 1}`} onClick={this.handleClickRow}>
              {TABLE_CONSTANTS.TITLES.map((title, column) => (
                <ExchangeTableCell title={row[title]} key={`row${idx + 1}cell${column}`} />
              ))}
            </ExchangeTableRow>
          ))}
        </ExchangeTable>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  addNewPair: PropTypes.func.isRequired,
  deletePair: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data, message: state.message, error: Boolean(state.error), request: Boolean(state.request),
});

const mapDispatchToProps = dispatch => ({
  addNewPair: (pair) => {
    dispatch(addCurrencyPair(pair));
  },
  deletePair: bindActionCreators(deleteCurrencyPair, dispatch),
  getMessage: bindActionCreators(returnResolveNewPair, dispatch),
}
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
