import {
  GET_FEATURED_PLAYLISTS_ERROR,
  GET_FEATURED_PLAYLISTS_REQUESTED,
  GET_FEATURED_PLAYLISTS_SUCCESS
} from './constants';
import * as spotifyAPI from '../API/spotify';
import { clearAuthorizationAccessToken } from '../Authorization/actions';

const PLAYLISTS_PER_PAGE = 8;

const getFeaturedPlaylistsErrorAction = error => ({ type: GET_FEATURED_PLAYLISTS_ERROR, error });
const getFeaturedPlaylistsRequestedAction = () => ({ type: GET_FEATURED_PLAYLISTS_REQUESTED });
const getFeaturedPlaylistsSuccessAction = data => ({
  type: GET_FEATURED_PLAYLISTS_SUCCESS,
  data
});

export const getFeaturedPlaylists = (token, filters = {}, page = 1) => dispatch => {
  const { country, locale, timestamp } = filters;

  dispatch(getFeaturedPlaylistsRequestedAction());

  return spotifyAPI
    .getSpotifyFeaturedPlaylists(
      token,
      country,
      locale,
      timestamp,
      PLAYLISTS_PER_PAGE,
      (page - 1) * PLAYLISTS_PER_PAGE
    )
    .then(response => {
      dispatch(getFeaturedPlaylistsSuccessAction(response.playlists));
    })
    .catch(error => {
      dispatch(getFeaturedPlaylistsErrorAction(error));

      if (error.message === spotifyAPI.SPOTIFY_FEATURED_PLAYLIST_ERRORS.UNAUTHORIZED) {
        dispatch(clearAuthorizationAccessToken());
      }
    });
};
