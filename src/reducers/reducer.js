import ACTION_CONSTANT from '../constants/action.constant';
import MESSAGE_CONSTANT from '../constants/message.constant';
import toFixedExchangeData from '../utils/action.data';

const initialState = {
  data: [],
  request: false,
  error: false,
  message: '',
};

const currencyPairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANT.DELETE: {
      const newState = { ...state };
      const oldData = [...newState.data];
      newState.data = [...oldData.slice().splice(0, action.index), ...oldData.slice().splice(action.index + 1, oldData.length)];
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
      newState.data = newState.data.concat({ ...toFixedExchangeData(action.data), '#': newState.data.length });
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
