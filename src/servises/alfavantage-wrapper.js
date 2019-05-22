/* eslint-disable class-methods-use-this */
import DataParcer from '../utils/data-parser';

import SERVISES_CONSTANT from '../constants/servises.constant';

const checkStatus = (response) => {
  if (response >= 200 && response <= 300) {
    return true;
  }
  return false;
};

const createXhr = (onError) => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    } catch (CatchException) {
      xhr = new window.ActiveXObject('Msxml2.XMLHTTP');
    }
  }
  if (!xhr) {
    onError('Невозможно создать XMLHttpRequest');
  }
  return xhr;
};

const makeServerRequest = (url, onLoad, onError, method) => {
  const xhr = createXhr(onError);
  xhr.responseType = 'json';

  const responseLoadHandler = () => {
    if (checkStatus(xhr.status)) {
      return onLoad(DataParcer.parseCurrencyPair(xhr.response));
    }
    if (SERVISES_CONSTANT.ERROR_CODE[xhr.status]) {
      return onError(SERVISES_CONSTANT.ERROR_CODE[xhr.status]);
    }
    return onError(`Ошибка при загрузке данных! Статус ответа: ${xhr.status}  ${xhr.statusText}. Попробуйте перезагрузить страницу`);
  };

  const responseErrorHandler = () => onError('Серевер вернул неизвестную ошибку при обработке запроса');

  const responseAbortHandler = () => onError('Обрыв соединения!!!');

  const responseTimeoutHandler = () => {
    xhr.abort();
    return onError('Превышен интревал одидания ответа от Сервера. Операция отменена');
  };

  xhr.timeout = SERVISES_CONSTANT.TIMEOUT;

  xhr.onload = responseLoadHandler;
  xhr.onerror = responseErrorHandler;
  xhr.onabort = responseAbortHandler;
  xhr.ontimeout = responseTimeoutHandler;

  xhr.open(method, url);
  xhr.send();
};

class AlfavantageWrapperApi {
  constructor() {
    this.authKey = SERVISES_CONSTANT.KEY;

    this.load = this.load.bind(this);
  }

  load(url, onLoad, onError) {
    return makeServerRequest(url, onLoad, onError, 'GET');
  }

  getExchangePair(pair, onLoad, onError) {
    console.log(pair);
    return this.load(SERVISES_CONSTANT.GET_EX_RATE(pair.from, pair.to, this.authKey), onLoad, onError);
  }
}

export default new AlfavantageWrapperApi();
