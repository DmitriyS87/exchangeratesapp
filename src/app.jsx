/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Title from './components/title.jsx';
import Controls from './components/controlls.jsx';
import ExchangeTable from './components/exchange-table.jsx';
import ExchangeTableRow from './components/exchange-table-row.jsx';
import ExchangeTableCell from './components/exchange-table-cell.jsx';

import TABLE_CONSTANTS from './constants/table.constants';

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

    return (
      <React.Fragment>
        <Title />
        <Controls currensies={currencies} onClick={this.handleClickAdd} />
        <ExchangeTable>
          <ExchangeTableRow style={TABLE_CONSTANTS.HEADER_ROW_STYLE} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX}`}>
            {TABLE_CONSTANTS.TITLES.map((title, column) => <ExchangeTableCell title={title} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX}cell${column}`} />)}
          </ExchangeTableRow>
          {[data].map((row, idx) => (
            <ExchangeTableRow style={TABLE_CONSTANTS.DATA_ROWS_STYLE} key={`row${TABLE_CONSTANTS.ROW_TITLE_INDEX + idx + 1}`}>
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
  data: PropTypes.object.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
