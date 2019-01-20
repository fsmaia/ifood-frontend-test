import rootReducer from '../../../../reducers';
import { getAuthorizationTokenSelector, isAuthorizedSelector } from '../../selectors';
import { SAVE_AUTHORIZATION_ACCESS_TOKEN, CLEAR_AUTHORIZATION_ACCESS_TOKEN } from '../../constants';

describe('reducers/authorization/token', () => {
  describe('Initial state', () => {
    const initialState = rootReducer(undefined, {});

    it('has an empty token', () => {
      expect(getAuthorizationTokenSelector(initialState)).toEqual('');
    });

    it('is not authorized', () => {
      expect(isAuthorizedSelector(initialState)).toBeFalsy();
    });
  });

  describe('SAVE_AUTHORIZATION_ACCESS_TOKEN', () => {
    const state = rootReducer(
      {},
      {
        type: SAVE_AUTHORIZATION_ACCESS_TOKEN,
        token: 'token'
      }
    );

    it('has a valid token', () => {
      expect(getAuthorizationTokenSelector(state)).toEqual('token');
    });

    it('is authorized', () => {
      expect(isAuthorizedSelector(state)).toBeTruthy();
    });
  });

  describe('CLEAR_AUTHORIZATION_ACCESS_TOKEN', () => {
    const state = rootReducer(
      {},
      {
        type: CLEAR_AUTHORIZATION_ACCESS_TOKEN
      }
    );

    it('has an empty token', () => {
      expect(getAuthorizationTokenSelector(state)).toEqual('');
    });

    it('is not authorized', () => {
      expect(isAuthorizedSelector(state)).toBeFalsy();
    });
  });
});
