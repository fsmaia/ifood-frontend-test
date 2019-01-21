import * as filtersAPI from '../API/filters';
import {
  GET_FILTERS_ERROR,
  GET_FILTERS_REQUESTED,
  GET_FILTERS_SUCCESS,
  CHANGE_FILTERS_NAME_VALUE
} from './constants';

const changeFiltersNameValueAction = value => ({ type: CHANGE_FILTERS_NAME_VALUE, value });
const getFiltersErrorAction = error => ({ type: GET_FILTERS_ERROR, error });
const getFiltersRequestedAction = () => ({ type: GET_FILTERS_REQUESTED });
const getFiltersSuccessAction = data => ({
  type: GET_FILTERS_SUCCESS,
  data
});

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

export const changeFiltersNameValue = value => dispatch =>
  dispatch(changeFiltersNameValueAction(value));
