import rootReducer from '../../../../reducers';
import { getPlaylistsFilterSelector } from '../../selectors';
import { changePlaylistsFilterAction } from '../../actions';

describe('reducers/playlists/filter', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is empty', () => {
      expect(getPlaylistsFilterSelector(initialState)).toEqual('');
    });
  });

  describe('CHANGE_PLAYLISTS_FILTER', () => {
    const value = 'value';
    const state = rootReducer({}, changePlaylistsFilterAction(value));

    it('has a value', () => {
      expect(getPlaylistsFilterSelector(state)).toEqual(value);
    });
  });
});
