import { SAVE_AUTHORIZATION_ACCESS_TOKEN, CLEAR_AUTHORIZATION_ACCESS_TOKEN } from '../constants';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AUTHORIZATION_ACCESS_TOKEN:
      return action.token;
    case CLEAR_AUTHORIZATION_ACCESS_TOKEN:
      return initialState;
    default:
      return state;
  }
};
