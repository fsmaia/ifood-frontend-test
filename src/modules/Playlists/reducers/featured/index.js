import {
  GET_FEATURED_PLAYLISTS_REQUESTED,
  GET_FEATURED_PLAYLISTS_SUCCESS,
  GET_FEATURED_PLAYLISTS_ERROR,
  RESET_FEATURED_PLAYLISTS
} from '../../constants';
import { CLEAR_AUTHORIZATION_ACCESS_TOKEN } from '../../../Authorization/constants';

const initialState = {
  data: {
    items: [],
    total: 0
  },
  loading: false,
  loaded: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_PLAYLISTS_REQUESTED:
      return {
        ...initialState,
        data: state.data,
        loading: true
      };
    case GET_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...initialState,
        data: {
          ...action.data,
          items: [...state.data.items, ...action.data.items]
        },
        loaded: true
      };
    case GET_FEATURED_PLAYLISTS_ERROR: {
      return {
        ...initialState,
        error: action.error
      };
    }
    case CLEAR_AUTHORIZATION_ACCESS_TOKEN:
    case RESET_FEATURED_PLAYLISTS: {
      return initialState;
    }
    default:
      return state;
  }
};
