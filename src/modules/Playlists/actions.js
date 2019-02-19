import {
  CHANGE_PLAYLISTS_FILTER,
  GET_FEATURED_PLAYLISTS_ERROR,
  GET_FEATURED_PLAYLISTS_REQUESTED,
  GET_FEATURED_PLAYLISTS_SUCCESS,
  RESET_FEATURED_PLAYLISTS
} from './constants';
import * as spotifyAPI from '../API/spotify';
import { clearAuthorizationAccessToken } from '../Authorization/actions';

const PLAYLISTS_PER_PAGE = 8;

export const changePlaylistsFilterAction = value => ({ type: CHANGE_PLAYLISTS_FILTER, value });
export const getFeaturedPlaylistsErrorAction = error => ({
  type: GET_FEATURED_PLAYLISTS_ERROR,
  error
});
export const getFeaturedPlaylistsRequestedAction = page => ({
  type: GET_FEATURED_PLAYLISTS_REQUESTED,
  page
});
export const getFeaturedPlaylistsSuccessAction = (data, page) => ({
  type: GET_FEATURED_PLAYLISTS_SUCCESS,
  data,
  page
});
export const resetFeaturedPlaylistsAction = () => ({ type: RESET_FEATURED_PLAYLISTS });

export const changePlaylistsFilter = value => dispatch =>
  dispatch(changePlaylistsFilterAction(value));

export const getFeaturedPlaylists = (token, filters = {}, page = 1) => dispatch => {
  const { country, locale, timestamp } = filters;

  dispatch(getFeaturedPlaylistsRequestedAction(page));

  return spotifyAPI
    .getSpotifyFeaturedPlaylists(
      token,
      country || undefined,
      locale || undefined,
      timestamp ? timestamp.toISOString() : undefined,
      PLAYLISTS_PER_PAGE,
      (page - 1) * PLAYLISTS_PER_PAGE
    )
    .then(response => dispatch(getFeaturedPlaylistsSuccessAction(response.playlists, page)))
    .catch(error => {
      dispatch(getFeaturedPlaylistsErrorAction(error));

      if (error.message === spotifyAPI.SPOTIFY_FEATURED_PLAYLIST_ERRORS.UNAUTHORIZED) {
        dispatch(clearAuthorizationAccessToken());
      }
    });
};

export const resetFeaturedPlaylists = () => dispatch => dispatch(resetFeaturedPlaylistsAction());
