import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFeaturedPlaylists } from './actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';
import {
  getPlaylistsSelector,
  isEmptyPlaylistsSelector,
  hasLoadedPlaylistsSelector,
  isLoadingPlaylistsSelector,
  getPlaylistsTotalCountSelector
} from './selectors';
import { PlaylistShape } from './shapes';
import PlaylistsItem from './components/Item';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';

@connect(
  state => ({
    empty: isEmptyPlaylistsSelector(state),
    loading: isLoadingPlaylistsSelector(state),
    loaded: hasLoadedPlaylistsSelector(state),
    playlists: getPlaylistsSelector(state),
    token: getAuthorizationTokenSelector(state),
    totalCount: getPlaylistsTotalCountSelector(state)
  }),
  { getFeaturedPlaylists }
)
class Playlists extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    getFeaturedPlaylists: PropTypes.func.isRequired,
    empty: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    playlists: PropTypes.arrayOf(PlaylistShape).isRequired,
    token: PropTypes.string.isRequired,
    totalCount: PropTypes.number
  };

  static defaultProps = {
    className: '',
    totalCount: 0
  };

  componentDidMount() {
    const { token } = this.props;

    this.props.getFeaturedPlaylists(token);
  }

  render() {
    const { className, empty, loading, loaded, playlists, totalCount } = this.props;

    return (
      <div className={classNames(className, 'Playlists')}>
        <SectionHeader title="Playlists">{totalCount} results found</SectionHeader>

        {loading && <div className="Playlists__items Playlists__items--loading">Loading...</div>}

        {loaded && empty && (
          <div className="Playlists__items Playlists__items--empty">
            Your search returned no results. Try to change filters.
          </div>
        )}

        {loaded && !empty && (
          <div className="Playlists__items">
            {playlists.map(({ id, image, name }) => (
              <PlaylistsItem key={id} className="Playlists__item" image={image} name={name} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Playlists;
