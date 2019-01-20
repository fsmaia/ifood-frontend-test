import { GET_FILTERS_REQUESTED, GET_FILTERS_SUCCESS, GET_FILTERS_ERROR } from './constants';

const initialState = {
  data: [],
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERS_REQUESTED:
      return {
        ...initialState,
        loading: true
      };
    case GET_FILTERS_SUCCESS:
      return {
        ...initialState,
        data: action.data,
        loaded: true
      };
    case GET_FILTERS_ERROR: {
      return {
        ...initialState,
        error: action.error
      };
    }
    default:
      return state;
  }
};
