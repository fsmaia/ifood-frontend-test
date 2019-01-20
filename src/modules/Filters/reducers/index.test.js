import rootReducer from '../../../reducers';
import {
  isLoadingFiltersSelector,
  hasLoadedFiltersSelector,
  getFiltersSelector,
  getFiltersDataSelector,
  getFiltersErrorSelector
} from '../selectors';
import { GET_FILTERS_REQUESTED, GET_FILTERS_SUCCESS, GET_FILTERS_ERROR } from '../constants';

describe('reducers/filters', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is not loading', () => {
      expect(isLoadingFiltersSelector(initialState)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersSelector(initialState)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersSelector(initialState)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFiltersErrorSelector(initialState)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_REQUESTED', () => {
    const state = rootReducer({}, { type: GET_FILTERS_REQUESTED });

    it('is loading', () => {
      expect(isLoadingFiltersSelector(state)).toBeTruthy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersSelector(state)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFiltersErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_SUCCESS', () => {
    const data = ['1'];
    const state = rootReducer({}, { type: GET_FILTERS_SUCCESS, data });

    it('is not loading', () => {
      expect(isLoadingFiltersSelector(state)).toBeFalsy();
    });

    it('has loaded', () => {
      expect(hasLoadedFiltersSelector(state)).toBeTruthy();
    });

    it('has no data', () => {
      expect(getFiltersDataSelector(state)).toEqual(data);
    });

    it('has no errors', () => {
      expect(getFiltersErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_ERROR', () => {
    const error = new Error('error');
    const state = rootReducer({}, { type: GET_FILTERS_ERROR, error });

    it('is not loading', () => {
      expect(isLoadingFiltersSelector(state)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersSelector(state)).toEqual([]);
    });

    it('has errors', () => {
      expect(getFiltersErrorSelector(state)).toEqual(error);
    });
  });
});
