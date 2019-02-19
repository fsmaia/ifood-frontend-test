import rootReducer from '../../../../reducers';
import {
  isLoadingFiltersFieldsSelector,
  hasErrorFiltersFieldsSelector,
  hasLoadedFiltersFieldsSelector,
  getFiltersFieldsSelector,
  getFiltersFieldsDataSelector
} from '../../selectors';
import {
  getFiltersRequestedAction,
  getFiltersSuccessAction,
  getFiltersErrorAction
} from '../../actions';

describe('reducers/filters/fields', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('is not loading', () => {
      expect(isLoadingFiltersFieldsSelector(initialState)).toBeFalsy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(initialState)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsDataSelector(initialState)).toEqual([]);
    });

    it('has no errors', () => {
      expect(hasErrorFiltersFieldsSelector(initialState)).toBeFalsy();
    });
  });

  describe('GET_FILTERS_REQUESTED', () => {
    const state = rootReducer({}, getFiltersRequestedAction());

    it('is loading', () => {
      expect(isLoadingFiltersFieldsSelector(state)).toBeTruthy();
    });

    it('has not loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has no data', () => {
      expect(getFiltersFieldsDataSelector(state)).toEqual([]);
    });

    it('has no errors', () => {
      expect(hasErrorFiltersFieldsSelector(state)).toBeFalsy();
    });
  });

  describe('GET_FILTERS_SUCCESS', () => {
    const data = [
      {
        id: 'select',
        name: 'Select',
        values: [
          {
            value: 'en_AU',
            name: 'en_AU'
          },
          {
            value: 'de_DE',
            name: 'de_DE '
          }
        ]
      },
      {
        id: 'timestamp',
        name: 'Timestamp',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss'
        }
      },
      {
        id: 'text',
        name: 'Text',
        validation: {
          primitiveType: 'STRING'
        }
      }
    ];

    const convertedData = [
      {
        id: 'select',
        name: 'Select',
        type: 'SELECT',
        values: [
          {
            value: 'en_AU',
            name: 'en_AU'
          },
          {
            value: 'de_DE',
            name: 'de_DE '
          }
        ]
      },
      {
        id: 'timestamp',
        name: 'Timestamp',
        type: 'DATE',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss'
        }
      },
      {
        id: 'text',
        name: 'Text',
        type: 'TEXT',
        validation: {
          primitiveType: 'STRING'
        }
      }
    ];

    const state = rootReducer({}, getFiltersSuccessAction(data));

    it('is not loading', () => {
      expect(isLoadingFiltersFieldsSelector(state)).toBeFalsy();
    });

    it('has loaded', () => {
      expect(hasLoadedFiltersFieldsSelector(state)).toBeTruthy();
    });

    it('has data', () => {
      expect(getFiltersFieldsDataSelector(state)).toEqual(data);
    });

    it('has filters with type', () => {
      expect(getFiltersFieldsSelector(state)).toEqual(convertedData);
    });

    it('has no errors', () => {
      expect(hasErrorFiltersFieldsSelector(state)).toBeFalsy();
    });
  });

  describe('GET_FILTERS_ERROR', () => {
    const error = new Error('error');
    const state = rootReducer({}, getFiltersErrorAction(error));

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
      expect(hasErrorFiltersFieldsSelector(state)).toBeTruthy();
    });
  });
});
