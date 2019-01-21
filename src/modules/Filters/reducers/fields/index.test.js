import rootReducer from '../../../../reducers';
import {
  isLoadingFiltersFieldsSelector,
  hasLoadedFiltersFieldsSelector,
  getFiltersFieldsSelector,
  getFiltersFieldsDataSelector,
  getFiltersFieldsErrorSelector
} from '../../selectors';
import { GET_FILTERS_REQUESTED, GET_FILTERS_SUCCESS, GET_FILTERS_ERROR } from '../../constants';

describe('reducers/filters', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is not loading', () => {
      expect(isLoadingFiltersFieldsSelector(initialState)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(initialState)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsSelector(initialState)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFiltersFieldsErrorSelector(initialState)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_REQUESTED', () => {
    const state = rootReducer({}, { type: GET_FILTERS_REQUESTED });

    it('is loading', () => {
      expect(isLoadingFiltersFieldsSelector(state)).toBeTruthy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsSelector(state)).toEqual([]);
    });

    it('has no errors', () => {
      expect(getFiltersFieldsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_SUCCESS', () => {
    const data = ['1'];
    const state = rootReducer({}, { type: GET_FILTERS_SUCCESS, data });

    it('is not loading', () => {
      expect(isLoadingFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(state)).toBeTruthy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsDataSelector(state)).toEqual(data);
    });

    it('has no errors', () => {
      expect(getFiltersFieldsErrorSelector(state)).toBeUndefined();
    });
  });

  describe('GET_FILTERS_ERROR', () => {
    const error = new Error('error');
    const state = rootReducer({}, { type: GET_FILTERS_ERROR, error });

    it('is not loading', () => {
      expect(isLoadingFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsSelector(state)).toEqual([]);
    });

    it('has errors', () => {
      expect(getFiltersFieldsErrorSelector(state)).toEqual(error);
    });
  });
});