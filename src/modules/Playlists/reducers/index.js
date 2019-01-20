import {
  GET_FEATURED_PLAYLISTS_REQUESTED,
  GET_FEATURED_PLAYLISTS_SUCCESS,
  GET_FEATURED_PLAYLISTS_ERROR
} from '../constants';

const initialState = {
  data: {},
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_PLAYLISTS_REQUESTED:
      return {
        ...initialState,
        loading: true
      };
    case GET_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...initialState,
        data: action.data,
        loaded: true
      };
    case GET_FEATURED_PLAYLISTS_ERROR: {
      return {
        ...initialState,
        error: action.error
      };
    }
    default:
      return state;
  }
};
