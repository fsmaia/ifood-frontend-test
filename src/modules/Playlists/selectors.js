import { contains, head, filter, isEmpty, map, pipe, prop, propOr, toLower } from 'ramda';
import { createSelector } from 'reselect';
import { getFiltersNameValueSelector } from '../Filters/selectors';

const basePlaylistsSelector = prop('playlists');

const convertPlaylist = playlist => ({
  ...playlist,
  image: prop('url', head(playlist.images))
});

export const isLoadingPlaylistsSelector = pipe(
  basePlaylistsSelector,
  prop('loading')
);

export const hasLoadedPlaylistsSelector = pipe(
  basePlaylistsSelector,
  prop('loaded')
);

export const getPlaylistsErrorSelector = pipe(
  basePlaylistsSelector,
  prop('error')
);

export const getPlaylistsDataSelector = pipe(
  basePlaylistsSelector,
  prop('data')
);

export const getPlaylistsSelector = createSelector(
  getPlaylistsDataSelector,
  getFiltersNameValueSelector,
  (playlists, nameValue) =>
    pipe(
      propOr([], 'items'),
      map(convertPlaylist),
      filter(
        pipe(
          prop('name'),
          toLower,
          contains(toLower(nameValue))
        )
      )
    )(playlists)
);

export const isEmptyPlaylistsSelector = pipe(
  getPlaylistsSelector,
  isEmpty
);

export const getPlaylistsTotalCountSelector = pipe(
  getPlaylistsDataSelector,
  prop('total')
);
