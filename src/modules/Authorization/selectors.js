import { compose, isEmpty, not, pipe, prop } from 'ramda';

const baseAuthorizationSelector = prop('authorization');
const baseAuthorizationTokenSelector = pipe(
  baseAuthorizationSelector,
  prop('token')
);

export const isAuthorizedSelector = pipe(
  baseAuthorizationTokenSelector,
  compose(
    not,
    isEmpty
  )
);
