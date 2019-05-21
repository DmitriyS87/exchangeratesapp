export default {
  exchangeId: 0,
  data: {
    fromCurrencyCode: 'USD',
    fromCurrencyName: 'United States Dollar',
    toCurrencyCode: 'JPY',
    toCurrencyName: 'Japanese Yen',
    exchangeRate: '110.15000000',
    lastRefreshed: '2019-05-20 08:23:06',
    timeZone: 'UTC',
    bidPrice: '110.15000000',
    askPrice: '110.16000000',
  },
};

const RESPONSE = {
  'Realtime Currency Exchange Rate': {
    '1. From_Currency Code': 'USD',
    '2. From_Currency Name': 'United States Dollar',
    '3. To_Currency Code': 'JPY',
    '4. To_Currency Name': 'Japanese Yen',
    '5. Exchange Rate': '110.15000000',
    '6. Last Refreshed': '2019-05-20 08:23:06',
    '7. Time Zone': 'UTC',
    '8. Bid Price': '110.15000000',
    '9. Ask Price': '110.16000000',
  },
};

const CURRENCIES = ['USD', 'UAH', 'RUB'];

export { RESPONSE, CURRENCIES };
