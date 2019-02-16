import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFeaturedPlaylists, changePlaylistsFilter } from './actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';
import {
  getFilteredPlaylistsSelector,
  isEmptyPlaylistsSelector,
  hasLoadedFeaturedPlaylistsSelector,
  isLoadingFeaturedPlaylistsSelector,
  getPlaylistsTotalCountSelector,
  getPlaylistsCountSelector,
  getPlaylistsFilterSelector,
  hasErrorFeaturedPlaylistsSelector
} from './selectors';
import { PlaylistShape } from './shapes';
import PlaylistsItem from './components/Item';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import FieldText from '../UI/components/FieldText';
import { getFiltersValuesSelector } from '../Filters/selectors';

@connect(
  state => ({
    count: getPlaylistsCountSelector(state),
    empty: isEmptyPlaylistsSelector(state),
    filter: getPlaylistsFilterSelector(state),
    filters: getFiltersValuesSelector(state),
    hasError: hasErrorFeaturedPlaylistsSelector(state),
    loading: isLoadingFeaturedPlaylistsSelector(state),
    loaded: hasLoadedFeaturedPlaylistsSelector(state),
    playlists: getFilteredPlaylistsSelector(state),
    token: getAuthorizationTokenSelector(state),
    totalCount: getPlaylistsTotalCountSelector(state)
  }),
  { changePlaylistsFilter, getFeaturedPlaylists }
)
class Playlists extends PureComponent {
  static propTypes = {
    changePlaylistsFilter: PropTypes.func.isRequired,
    className: PropTypes.string,
    empty: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    playlists: PropTypes.arrayOf(PlaylistShape).isRequired,
    totalCount: PropTypes.number
  };

  static defaultProps = {
    className: '',
    totalCount: 0
  };

  handleFilterChange = event => {
    this.props.changePlaylistsFilter(event.target.value);
  };

  render() {
    const {
      className,
      empty,
      filter,
      hasError,
      loading,
      loaded,
      playlists,
      totalCount
    } = this.props;

    return (
      <div className={classNames(className, 'Playlists')}>
        <SectionHeader title="Playlists">{totalCount} results found</SectionHeader>

        <FieldText
          className={classNames('Playlists__filter', filter === '' && 'Playlists__filter--empty')}
          name="filter"
          onChange={this.handleFilterChange}
          value={filter}
          placeholder="Try the local name search for better results..."
        />

        {empty && loading && (
          <div className="Playlists__message Playlists__message--loading">Loading...</div>
        )}

        {empty && loaded && (
          <div className="Playlists__message Playlists__message--empty">
            Your search returned no results. Try to change filters.
          </div>
        )}

        {empty && hasError && (
          <div className="Playlists__message Playlists__message--error">
            Your search returned no results due to a server error. Try again in a few minutes.
          </div>
        )}

        <div className="Playlists__items">
          {playlists.map(({ id, image, name }) => (
            <PlaylistsItem key={id} className="Playlists__item" image={image} name={name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Playlists;
