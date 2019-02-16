import classNames from 'classnames';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import { getFilters, changeFilterValue } from './actions';
import {
  getFiltersFieldsSelector,
  hasLoadedFiltersFieldsSelector,
  isLoadingFiltersFieldsSelector,
  getFiltersValuesSelector
} from './selectors';
import { FilterFieldShape, FilterValuesShape } from './shapes';
import { FILTER_FIELD_TYPES } from './constants';
import { getFeaturedPlaylists, resetFeaturedPlaylists } from '../Playlists/actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';
import FieldDate from '../UI/components/FieldDate';
import FieldSelect from '../UI/components/FieldSelect';
import FieldText from '../UI/components/FieldText';
import Button from '../UI/components/Button';

@connect(
  state => ({
    fields: getFiltersFieldsSelector(state),
    loaded: hasLoadedFiltersFieldsSelector(state),
    loading: isLoadingFiltersFieldsSelector(state),
    token: getAuthorizationTokenSelector(state),
    values: getFiltersValuesSelector(state)
  }),
  { changeFilterValue, getFilters, getFeaturedPlaylists, resetFeaturedPlaylists }
)
class Filters extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    changeFilterValue: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(FilterFieldShape),
    getFeaturedPlaylists: PropTypes.func.isRequired,
    getFilters: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    values: FilterValuesShape.isRequired,
    resetFeaturedPlaylists: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    fields: []
  };

  componentDidMount() {
    this.props.getFilters();
  }

  componentDidUpdate(prevProps) {
    const { values, token } = this.props;

    if (!equals(prevProps.values, values)) {
      this.props.getFeaturedPlaylists(token, values);
    }
  }

  handleFiltersReloadClick = () => {
    this.props.getFilters();
  };

  handleFilterChange = field => event => {
    this.props.resetFeaturedPlaylists();

    this.props.changeFilterValue(field, event.target.value);
  };

  handleDateFilterChange = field => value => {
    this.props.resetFeaturedPlaylists();

    this.props.changeFilterValue(field, value);
  };

  render() {
    const { className, fields, loaded, loading, values } = this.props;

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
            {fields.map(({ id, type, values: options }) => {
              switch (type) {
                case FILTER_FIELD_TYPES.DATE:
                  return (
                    <FieldDate
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      value={values[id]}
                      onChange={this.handleDateFilterChange(id)}
                    />
                  );
                case FILTER_FIELD_TYPES.SELECT:
                  return (
                    <FieldSelect
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      options={options}
                      value={values[id]}
                      onChange={this.handleFilterChange(id)}
                    />
                  );
                case FILTER_FIELD_TYPES.TEXT:
                default:
                  return (
                    <FieldText
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      value={values[id]}
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
