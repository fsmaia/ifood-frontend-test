import { CHANGE_FILTERS_NAME_VALUE } from '../../constants';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS_NAME_VALUE:
      return action.value;
    default:
      return state;
  }
};
