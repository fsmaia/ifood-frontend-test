import rootReducer from '../../../reducers';
import {
  isLoadingPlaylistsSelector,
  hasLoadedPlaylistsSelector,
  getPlaylistsSelector,
  getPlaylistsDataSelector,
  getPlaylistsErrorSelector
} from '../selectors';
import {
  GET_FEATURED_PLAYLISTS_REQUESTED,
  GET_FEATURED_PLAYLISTS_SUCCESS,
  GET_FEATURED_PLAYLISTS_ERROR
} from '../constants';

describe('reducers/playlists', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is not loading', () => {
      expect(isLoadingPlaylistsSelector(initialState)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedPlaylistsSelector(initialState)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getPlaylistsSelector(initialState)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getPlaylistsErrorSelector(initialState)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_REQUESTED', () => {
    const state = rootReducer({}, { type: GET_FEATURED_PLAYLISTS_REQUESTED });

    it('is loading', () => {
      expect(isLoadingPlaylistsSelector(state)).toBeTruthy();
    });

    it('has not loaded', () => {
      expect(hasLoadedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getPlaylistsSelector(state)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getPlaylistsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_SUCCESS', () => {
    const data = ['1'];
    const state = rootReducer({}, { type: GET_FEATURED_PLAYLISTS_SUCCESS, data });

    it('is not loading', () => {
      expect(isLoadingPlaylistsSelector(state)).toBeFalsy();
    });

    it('has loaded', () => {
      expect(hasLoadedPlaylistsSelector(state)).toBeTruthy();
    });

    it('has no data', () => {
      expect(getPlaylistsDataSelector(state)).toEqual(data);
    });

    it('has no errors', () => {
      expect(getPlaylistsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_ERROR', () => {
    const error = new Error('error');
    const state = rootReducer({}, { type: GET_FEATURED_PLAYLISTS_ERROR, error });

    it('is not loading', () => {
      expect(isLoadingPlaylistsSelector(state)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getPlaylistsSelector(state)).toEqual([]);
    });

    it('has errors', () => {
      expect(getPlaylistsErrorSelector(state)).toEqual(error);
    });
  });
});
