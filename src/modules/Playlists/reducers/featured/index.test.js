import rootReducer from '../../../../reducers';
import {
  isLoadingFeaturedPlaylistsSelector,
  hasLoadedFeaturedPlaylistsSelector,
  getFilteredPlaylistsSelector,
  getFeaturedPlaylistsDataSelector,
  getFeaturedPlaylistsErrorSelector
} from '../../selectors';
import {
  getFeaturedPlaylistsRequestedAction,
  getFeaturedPlaylistsSuccessAction,
  getFeaturedPlaylistsErrorAction
} from '../../actions';

describe('reducers/playlists/featured', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is not loading', () => {
      expect(isLoadingFeaturedPlaylistsSelector(initialState)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFeaturedPlaylistsSelector(initialState)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFilteredPlaylistsSelector(initialState)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFeaturedPlaylistsErrorSelector(initialState)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_REQUESTED', () => {
    const state = rootReducer({}, getFeaturedPlaylistsRequestedAction());

    it('is loading', () => {
      expect(isLoadingFeaturedPlaylistsSelector(state)).toBeTruthy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFeaturedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFilteredPlaylistsSelector(state)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFeaturedPlaylistsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_SUCCESS', () => {
    const data = ['1'];
    const state = rootReducer({}, getFeaturedPlaylistsSuccessAction(data));

    it('is not loading', () => {
      expect(isLoadingFeaturedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has loaded', () => {
      expect(hasLoadedFeaturedPlaylistsSelector(state)).toBeTruthy();
    });

    it('has no data', () => {
      expect(getFeaturedPlaylistsDataSelector(state)).toEqual(data);
    });

    it('has no errors', () => {
      expect(getFeaturedPlaylistsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FEATURED_PLAYLISTS_ERROR', () => {
    const error = new Error('error');
    const state = rootReducer({}, getFeaturedPlaylistsErrorAction(error));

    it('is not loading', () => {
      expect(isLoadingFeaturedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFeaturedPlaylistsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFilteredPlaylistsSelector(state)).toEqual([]);
    });

    it('has errors', () => {
      expect(getFeaturedPlaylistsErrorSelector(state)).toEqual(error);
    });
  });
});
