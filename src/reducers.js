import { combineReducers } from 'redux';
import authorization from './modules/Authorization/reducers';
import playlists from './modules/Playlists/reducers';

export default combineReducers({
  authorization,
  playlists
});
