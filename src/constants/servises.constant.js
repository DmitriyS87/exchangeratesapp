const SERVISES_CONSTANT = {
  KEY: 'YPV3NFKX6D7QXSOC',
  GET_EX_RATE: (from, to, key) => `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${key}`,
  GET_INTRADAY: (from, to, key, interval) => `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${from}&to_symbol=${to}&interval=${interval}&apikey=${key}`,
  INTRADAY_INTERVALS: ['1min', '5min', '15min', '30min', '60min'],
  ERROR_CODE: {
    400: 'Неверный запрос к серверу. Сообщите администратору сайта о проблеме при запросе данных от сервера. 400',
    401: 'Недостаточно прав для выполнения запроса на сервер! Пройдите авторизацию. 401',
    404: 'Ошибка при загрузке данных! Запрашиваемая инфомрация не найдена. 404',
  },
  TIMEOUT: 3000,
};

export default SERVISES_CONSTANT;
