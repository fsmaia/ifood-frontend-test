import { CHANGE_PLAYLISTS_FILTER } from '../../constants';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYLISTS_FILTER:
      return action.value;
    default:
      return state;
  }
};
