import rootReducer from '../../../../reducers';
import { getFiltersValuesSelector } from '../../selectors';
import { changeFilterValueAction } from '../../actions';

describe('reducers/filters/values', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('has no data', () => {
      expect(getFiltersValuesSelector(initialState)).toEqual({});
    });
  });

  describe('CHANGE_FILTER_VALUE', () => {
    const filter = 'locale';
    const value = 'en_AU';
    const state = rootReducer({}, changeFilterValueAction(filter, value));

    it('has data', () => {
      expect(getFiltersValuesSelector(state)).toEqual({
        [filter]: value
      });
    });
  });
});
