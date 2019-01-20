import { stringify } from 'query-string';
import { SPOTIFY_CLIENT_ID, BASE_URL } from './env';

const SPOTIFY_SCOPES = ['user-read-private', 'user-read-email'];

const SPOTIFY_AUTH_REDIRECT_URL_PARAMS = {
  client_id: SPOTIFY_CLIENT_ID,
  redirect_uri: `${BASE_URL}/authorization`,
  scope: SPOTIFY_SCOPES.join(' '),
  response_type: 'token',
  state: 123
};

export const SPOTIFY_AUTH_REDIRECT_URL = `https://accounts.spotify.com/authorize?${stringify(
  SPOTIFY_AUTH_REDIRECT_URL_PARAMS
)}`;

export const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
