import { stringify } from 'query-string';
import { SPOTIFY_API_BASE_URL } from '../../constants/spotify';

export const getSpotifyFeaturedPlaylists = (token, country, locale, timestamp, limit, offset) =>
  fetch(
    `${SPOTIFY_API_BASE_URL}/browse/featured-playlists?${stringify({
      country,
      locale,
      timestamp,
      limit,
      offset
    })}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).then(response => response.json());
