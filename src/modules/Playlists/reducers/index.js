import { combineReducers } from 'redux';
import featured from './featured';
import filter from './filter';

export default combineReducers({
  featured,
  filter
});
