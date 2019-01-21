import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import { getFilters } from './actions';
import {
  getFiltersFieldsSelector,
  hasLoadedFiltersFieldsSelector,
  isLoadingFiltersFieldsSelector
} from './selectors';
import { FilterShape } from './shapes';
import { FILTER_TYPES } from './constants';
import { getFeaturedPlaylists } from '../Playlists/actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';
import FieldDate from '../UI/components/FieldDate';
import FieldSelect from '../UI/components/FieldSelect';
import FieldText from '../UI/components/FieldText';
import Button from '../UI/components/Button';

@connect(
  state => ({
    filters: getFiltersFieldsSelector(state),
    loaded: hasLoadedFiltersFieldsSelector(state),
    loading: isLoadingFiltersFieldsSelector(state),
    token: getAuthorizationTokenSelector(state)
  }),
  { getFilters, getFeaturedPlaylists }
)
class Filters extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.arrayOf(FilterShape),
    getFeaturedPlaylists: PropTypes.func.isRequired,
    getFilters: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    filters: []
  };

  state = {
    name: '',
    locale: undefined,
    country: undefined,
    timestamp: undefined
  };

  componentDidMount() {
    this.props.getFilters();
  }

  componentDidUpdate(_, prevState) {
    const { token } = this.props;
    const { country, locale, timestamp } = this.state;

    if (prevState !== this.state) {
      this.props.getFeaturedPlaylists(token, { country, locale, timestamp });
    }
  }

  handleFiltersReloadClick = () => {
    this.props.getFilters();
  };

  handleFilterChange = id => event => {
    this.setState({
      [id]: event.target.value
    });
  };

  render() {
    const { className, filters, loaded, loading } = this.props;

    return (
      <div className={classNames(className, 'Filters')}>
        <SectionHeader title="Filters">
          {!loading && (
            <Button onClick={this.handleFiltersReloadClick} text="Reload filters" secondary />
          )}
        </SectionHeader>

        {loading && <div className="Filters__loading">Loading...</div>}

        {loaded && (
          <div className="Filters__fields">
            {filters.map(({ id, type, values }) => {
              switch (type) {
                case FILTER_TYPES.DATE:
                  return (
                    <FieldDate
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      value={this.state[id]}
                      onChange={this.handleFilterChange(id)}
                    />
                  );
                case FILTER_TYPES.SELECT:
                  return (
                    <FieldSelect
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      values={values}
                      value={this.state[id]}
                      onChange={this.handleFilterChange(id)}
                    />
                  );
                case FILTER_TYPES.TEXT:
                default:
                  return (
                    <FieldText
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      value={this.state[id]}
                    />
                  );
              }
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Filters;
