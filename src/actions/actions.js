import ACTION_CONSTANT from '../constants/action.constant';
import { RESPONSE } from '../mocks/response.mock';
import DataParcer from '../utils/data-parser';

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

const addCurrencyPair = pair => (dispatch) => {
  addNewPair(dispatch);

  setTimeout(() => {
    dispatch(addSuccessNewPair({ ...DataParcer.parseCurrencyPair(RESPONSE) }));
  }, 2000, pair);
};

const returnResolveNewPair = err => ({
  type: ACTION_CONSTANT.RESOLVE,
  err,
});

export {
  addCurrencyPair, deleteCurrencyPair, returnResolveNewPair,
};
