import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
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
import { FilterValuesShape } from '../Filters/shapes';

@connect(
  state => ({
    count: getPlaylistsCountSelector(state),
    empty: isEmptyPlaylistsSelector(state),
    filter: getPlaylistsFilterSelector(state),
    hasError: hasErrorFeaturedPlaylistsSelector(state),
    loading: isLoadingFeaturedPlaylistsSelector(state),
    loaded: hasLoadedFeaturedPlaylistsSelector(state),
    playlists: getFilteredPlaylistsSelector(state),
    token: getAuthorizationTokenSelector(state),
    totalCount: getPlaylistsTotalCountSelector(state),
    values: getFiltersValuesSelector(state)
  }),
  { changePlaylistsFilter, getFeaturedPlaylists }
)
class Playlists extends PureComponent {
  static propTypes = {
    changePlaylistsFilter: PropTypes.func.isRequired,
    className: PropTypes.string,
    count: PropTypes.number.isRequired,
    empty: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    getFeaturedPlaylists: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    playlists: PropTypes.arrayOf(PlaylistShape).isRequired,
    token: PropTypes.string.isRequired,
    totalCount: PropTypes.number,
    values: FilterValuesShape.isRequired
  };

  static defaultProps = {
    className: '',
    totalCount: 0
  };

  componentDidMount() {
    const { token, values } = this.props;

    this.props.getFeaturedPlaylists(token, values);
  }

  handleFilterChange = event => {
    this.props.changePlaylistsFilter(event.target.value);
  };

  loadMore = page => {
    const { token, values } = this.props;

    this.props.getFeaturedPlaylists(token, values, page);
  };

  render() {
    const {
      className,
      count,
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

        {!empty && (
          <InfiniteScroll
            pageStart={1}
            initialLoad={false}
            className="Playlists__items"
            hasMore={totalCount > count}
            loadMore={this.loadMore}
            loader={
              <div className="Playlists__message Playlists__message--loading" key="loading">
                Loading...
              </div>
            }
          >
            {playlists.map(({ id, image, name }) => (
              <PlaylistsItem key={id} className="Playlists__item" image={image} name={name} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default Playlists;
