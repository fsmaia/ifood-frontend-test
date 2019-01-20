import {
  CLEAR_AUTHORIZATION_ACCESS_TOKEN,
  SAVE_AUTHORIZATION_ACCESS_TOKEN
} from './constants/action-types';

export const saveAuthorizationAccessToken = token => dispatch =>
  dispatch({ type: SAVE_AUTHORIZATION_ACCESS_TOKEN, token });

export const clearAuthorizationAccessToken = dispatch =>
  dispatch({ type: CLEAR_AUTHORIZATION_ACCESS_TOKEN });
