import {
  contains,
  head,
  filter,
  isEmpty,
  isNil,
  length,
  map,
  not,
  pipe,
  prop,
  propOr,
  toLower
} from 'ramda';
import { createSelector } from 'reselect';

const basePlaylistsSelector = prop('playlists');

export const getPlaylistsFilterSelector = pipe(
  basePlaylistsSelector,
  prop('filter')
);

const featuredPlaylistsSelector = pipe(
  basePlaylistsSelector,
  prop('featured')
);

const convertPlaylist = playlist => ({
  ...playlist,
  image: prop('url', head(playlist.images))
});

export const isLoadingFeaturedPlaylistsSelector = pipe(
  featuredPlaylistsSelector,
  prop('loading')
);

export const hasLoadedFeaturedPlaylistsSelector = pipe(
  featuredPlaylistsSelector,
  prop('loaded')
);

export const hasErrorFeaturedPlaylistsSelector = pipe(
  featuredPlaylistsSelector,
  prop('error'),
  isNil,
  not
);

export const getFeaturedPlaylistsErrorSelector = pipe(
  featuredPlaylistsSelector,
  prop('error')
);

export const getFeaturedPlaylistsDataSelector = pipe(
  featuredPlaylistsSelector,
  prop('data')
);

export const getFeaturedPlaylistsSelector = pipe(
  getFeaturedPlaylistsDataSelector,
  propOr([], 'items')
);

export const getFilteredPlaylistsSelector = createSelector(
  getFeaturedPlaylistsSelector,
  getPlaylistsFilterSelector,
  (playlists, filterValue) =>
    pipe(
      map(convertPlaylist),
      filter(
        pipe(
          prop('name'),
          toLower,
          contains(toLower(filterValue))
        )
      )
    )(playlists)
);

export const isEmptyPlaylistsSelector = pipe(
  getFilteredPlaylistsSelector,
  isEmpty
);

export const getPlaylistsCountSelector = pipe(
  getFeaturedPlaylistsSelector,
  length
);

export const getPlaylistsTotalCountSelector = pipe(
  getFeaturedPlaylistsDataSelector,
  prop('total')
);
