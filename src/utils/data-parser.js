class DataParser {
  constructor(data) {
    this.from = data['Realtime Currency Exchange Rate']['1. From_Currency Code'];
    this.to = data['Realtime Currency Exchange Rate']['3. To_Currency Code'];
    this.rate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    this.bid = data['Realtime Currency Exchange Rate']['8. Bid Price'];
    this.ask = data['Realtime Currency Exchange Rate']['9. Ask Price'];
    this.date = data['Realtime Currency Exchange Rate']['6. Last Refreshed'];
  }

  static parseCurrencyPair(data) {
    return new DataParser(data);
  }

  static parseCurrencyPairs(array) {
    return array.map(it => DataParser.parseCurrencyPair(it));
  }
}

export default DataParser;
