import { head, isEmpty, map, pipe, prop, propOr } from 'ramda';

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

export const getPlaylistsSelector = pipe(
  getPlaylistsDataSelector,
  pipe(
    propOr([], 'items'),
    map(convertPlaylist)
  )
);

export const isEmptyPlaylistsSelector = pipe(
  getPlaylistsSelector,
  isEmpty
);

export const getPlaylistsTotalCountSelector = pipe(
  getPlaylistsDataSelector,
  prop('total')
);
