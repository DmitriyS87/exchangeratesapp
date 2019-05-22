import ACTION_CONSTANT from '../constants/action.constant';
import MESSAGE_CONSTANT from '../constants/message.constant';
import toFixedExchangeData from '../utils/action.data';

import LocalStore from '../servises/local-store';
import SERVISES_CONSTANT from '../constants/servises.constant';

const localStore = new LocalStore(SERVISES_CONSTANT.STORAGE_KEY, window.localStorage);
const objectToArray = object => Object.keys(object).map(id => object[id]);

const initialState = {
  data: objectToArray(localStore.getAll()),
  request: false,
  error: false,
  message: '',
};


const currencyPairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANT.DELETE: {
      const newState = { ...state };
      const data = objectToArray(localStore.getAll());
      localStore.rebaseItems(action.index, data.length - 1);
      newState.data = objectToArray(localStore.getAll());
      return newState;
    }

    case ACTION_CONSTANT.ADD: {
      return {
        ...state, request: true, error: false, message: MESSAGE_CONSTANT.MSG_REQUEST,
      };
    }

    case ACTION_CONSTANT.SUCCESS: {
      const newState = {
        ...state, request: false, error: false, message: MESSAGE_CONSTANT.MSG_SUCCESS,
      };
      console.log(newState.data);
      console.log(newState.data.length);

      localStore.pushItem(newState.data.length, { ...toFixedExchangeData(action.data) });
      newState.data = objectToArray(localStore.getAll());
      return newState;
    }

    case ACTION_CONSTANT.RESOLVE: {
      return {
        ...state, error: true, request: false, message: `${MESSAGE_CONSTANT.MSG_ERROR} ${action.err}`,
      };
    }

    default: { return state; }
  }
};

export default currencyPairsReducer;
