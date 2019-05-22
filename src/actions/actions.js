import ACTION_CONSTANT from '../constants/action.constant';
import { RESPONSE } from '../mocks/response.mock';
import DataParcer from '../utils/data-parser';
import AlfavantageWrapperApi from '../servises/alfavantage-wrapper';

const deleteCurrencyPair = index => ({
  type: ACTION_CONSTANT.DELETE,
  index,
});

const addNewPair = (dispatch) => {
  dispatch({
    type: ACTION_CONSTANT.ADD,
  });
};

const addSuccessNewPair = data => ({
  type: ACTION_CONSTANT.SUCCESS,
  data,
});

const returnResolveNewPair = err => ({
  type: ACTION_CONSTANT.RESOLVE,
  err,
});

const addCurrencyPair = pair => (dispatch) => {
  addNewPair(dispatch);
  AlfavantageWrapperApi.getExchangePair(pair, response => dispatch(addSuccessNewPair(response)), err => dispatch(returnResolveNewPair(err)));
};

export {
  addCurrencyPair, deleteCurrencyPair, returnResolveNewPair,
};
