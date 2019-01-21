import rootReducer from '../../../../reducers';
import { getFiltersNameValueSelector } from '../../selectors';
import { CHANGE_FILTERS_NAME_VALUE } from '../../constants';

describe('reducers/authorization/token', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('has an empty token', () => {
      expect(getFiltersNameValueSelector(initialState)).toEqual('');
    });
  });

  describe('CHANGE_FILTERS_NAME', () => {
    const value = 'value';
    const state = rootReducer(
      {},
      {
        type: CHANGE_FILTERS_NAME_VALUE,
        value
      }
    );

    it('has a valid value', () => {
      expect(getFiltersNameValueSelector(state)).toEqual(value);
    });
  });
});
