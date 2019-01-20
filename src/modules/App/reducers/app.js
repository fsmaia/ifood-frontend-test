import { SET_MESSAGE } from '../constants/action-types';

const initialState = {
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
