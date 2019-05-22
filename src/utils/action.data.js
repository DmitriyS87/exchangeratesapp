const toFixExchange = count => parseFloat(count).toFixed(3);

const toFixedExchangeData = data => ({
  ...data, rate: toFixExchange(data.rate), bid: toFixExchange(data.bid), ask: toFixExchange(data.ask),
});

export default toFixedExchangeData;
