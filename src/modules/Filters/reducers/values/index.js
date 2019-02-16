import { CHANGE_FILTER_VALUE, GET_FILTERS_REQUESTED } from '../../constants';
import { CLEAR_AUTHORIZATION_ACCESS_TOKEN } from '../../../Authorization/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_VALUE:
      return {
        ...state,
        [action.filter]: action.value
      };
    case GET_FILTERS_REQUESTED:
    case CLEAR_AUTHORIZATION_ACCESS_TOKEN:
      return initialState;
    default:
      return state;
  }
};
