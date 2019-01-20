import { filter, isEmpty, map, pipe, prop } from 'ramda';
import { FILTER_TYPES } from './constants';

const baseFiltersSelector = prop('filters');

const findFilterType = ({ validation, values }) => {
  if (validation && validation.entityType === 'DATE_TIME') {
    return FILTER_TYPES.DATE;
  }

  if (values) {
    return FILTER_TYPES.SELECT;
  }

  return FILTER_TYPES.TEXT;
};

const addFilterType = item => ({
  ...item,
  type: findFilterType(item)
});

export const isLoadingFiltersSelector = pipe(
  baseFiltersSelector,
  prop('loading')
);

export const hasLoadedFiltersSelector = pipe(
  baseFiltersSelector,
  prop('loaded')
);

export const getFiltersErrorSelector = pipe(
  baseFiltersSelector,
  prop('error')
);

export const getFiltersDataSelector = pipe(
  baseFiltersSelector,
  prop('data')
);

export const getFiltersSelector = pipe(
  getFiltersDataSelector,
  pipe(
    filter(item => item.id !== 'limit' && item.id !== 'offset'),
    map(addFilterType)
  )
);

export const isEmptyFiltersSelector = pipe(
  getFiltersDataSelector,
  isEmpty
);
