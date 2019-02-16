import { CHANGE_FILTER_VALUE } from '../../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_VALUE:
      return {
        ...state,
        [action.filter]: action.value
      };
    default:
      return state;
  }
};
