import { filter, isEmpty, map, pipe, prop } from 'ramda';
import { FILTER_FIELD_TYPES } from './constants';

const findFilterType = ({ validation, values }) => {
  if (validation && validation.entityType === 'DATE_TIME') {
    return FILTER_FIELD_TYPES.DATE;
  }

  if (values) {
    return FILTER_FIELD_TYPES.SELECT;
  }

  return FILTER_FIELD_TYPES.TEXT;
};

const addFilterType = item => ({
  ...item,
  type: findFilterType(item)
});

const baseFiltersSelector = prop('filters');

const baseFiltersFieldsSelector = pipe(
  baseFiltersSelector,
  prop('fields')
);

export const isLoadingFiltersFieldsSelector = pipe(
  baseFiltersFieldsSelector,
  prop('loading')
);

export const hasLoadedFiltersFieldsSelector = pipe(
  baseFiltersFieldsSelector,
  prop('loaded')
);

export const getFiltersFieldsErrorSelector = pipe(
  baseFiltersFieldsSelector,
  prop('error')
);

export const getFiltersFieldsDataSelector = pipe(
  baseFiltersFieldsSelector,
  prop('data')
);

export const getFiltersFieldsSelector = pipe(
  getFiltersFieldsDataSelector,
  pipe(
    filter(item => item.id !== 'limit' && item.id !== 'offset'),
    map(addFilterType)
  )
);

export const isEmptyFiltersFieldsSelector = pipe(
  getFiltersFieldsDataSelector,
  isEmpty
);

export const getFiltersValuesSelector = pipe(
  baseFiltersSelector,
  prop('values')
);
