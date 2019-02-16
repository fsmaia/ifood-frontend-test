import { CHANGE_FILTER_VALUE } from '../../constants';
import { CLEAR_AUTHORIZATION_ACCESS_TOKEN } from '../../../Authorization/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_VALUE:
      return {
        ...state,
        [action.filter]: action.value
      };
    case CLEAR_AUTHORIZATION_ACCESS_TOKEN:
      return initialState;
    default:
      return state;
  }
};
