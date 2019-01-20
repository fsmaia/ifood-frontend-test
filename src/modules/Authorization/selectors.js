import { compose, isEmpty, not, pipe, prop } from 'ramda';

const baseAuthorizationSelector = prop('authorization');

export const getAuthorizationTokenSelector = pipe(
  baseAuthorizationSelector,
  prop('token')
);

export const isAuthorizedSelector = pipe(
  getAuthorizationTokenSelector,
  compose(
    not,
    isEmpty
  )
);
