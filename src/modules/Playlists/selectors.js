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

export const hasPlaylistsFilterSelector = pipe(
  getPlaylistsFilterSelector,
  isEmpty,
  not
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

export const isEmptyFeaturedPlaylistsSelector = pipe(
  getFilteredPlaylistsSelector,
  isEmpty
);

export const getFeaturedPlaylistsCountSelector = pipe(
  getFeaturedPlaylistsSelector,
  length
);

export const getFilteredPlaylistsCountSelector = pipe(
  getFilteredPlaylistsSelector,
  length
);

export const getFeaturedPlaylistsTotalCountSelector = pipe(
  getFeaturedPlaylistsDataSelector,
  prop('total')
);

export const hasMoreFeaturedPlaylistsSelector = createSelector(
  hasPlaylistsFilterSelector,
  getFeaturedPlaylistsCountSelector,
  getFeaturedPlaylistsTotalCountSelector,
  (hasFilter, count, totalCount) => !hasFilter && totalCount > count
);
