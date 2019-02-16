import * as filtersAPI from '../API/filters';
import {
  GET_FILTERS_ERROR,
  GET_FILTERS_REQUESTED,
  GET_FILTERS_SUCCESS,
  CHANGE_FILTER_VALUE
} from './constants';

export const changeFilterValueAction = (filter, value) => ({
  type: CHANGE_FILTER_VALUE,
  filter,
  value
});
export const getFiltersErrorAction = error => ({ type: GET_FILTERS_ERROR, error });
export const getFiltersRequestedAction = () => ({ type: GET_FILTERS_REQUESTED });
export const getFiltersSuccessAction = data => ({
  type: GET_FILTERS_SUCCESS,
  data
});

export const changeFilterValue = (filter, value) => dispatch =>
  dispatch(changeFilterValueAction(filter, value));

export const getFilters = () => dispatch => {
  dispatch(getFiltersRequestedAction());

  return filtersAPI
    .getFilters()
    .then(response => {
      dispatch(getFiltersSuccessAction(response.filters));
    })
    .catch(error => {
      dispatch(getFiltersErrorAction(error));
    });
};
