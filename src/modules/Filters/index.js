import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import { getFilters, changeFiltersNameValue } from './actions';
import {
  getFiltersFieldsSelector,
  hasLoadedFiltersFieldsSelector,
  getFiltersNameValueSelector
} from './selectors';
import { FilterShape } from './shapes';
import { FILTER_TYPES } from './constants';
import FiltersFieldText from './components/FieldText';
import FiltersFieldSelect from './components/FieldSelect';
import FiltersFieldDate from './components/FieldDate';
import { getFeaturedPlaylists } from '../Playlists/actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';

@connect(
  state => ({
    filters: getFiltersFieldsSelector(state),
    loaded: hasLoadedFiltersFieldsSelector(state),
    nameValue: getFiltersNameValueSelector(state),
    token: getAuthorizationTokenSelector(state)
  }),
  { changeFiltersNameValue, getFilters, getFeaturedPlaylists }
)
class Filters extends PureComponent {
  static propTypes = {
    changeFiltersNameValue: PropTypes.func.isRequired,
    className: PropTypes.string,
    filters: PropTypes.arrayOf(FilterShape),
    getFeaturedPlaylists: PropTypes.func.isRequired,
    getFilters: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
    nameValue: PropTypes.string.isRequired,
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

  handleNameChange = event => {
    this.props.changeFiltersNameValue(event.target.value);
  };

  handleFilterChange = id => event => {
    this.setState({
      [id]: event.target.value
    });
  };

  render() {
    const { className, filters, loaded, nameValue } = this.props;

    return (
      <div className={classNames(className, 'Filters')}>
        <SectionHeader title="Filters" />

        {loaded && (
          <div className="Filters__fields">
            <FiltersFieldText
              className="Filters__field"
              label="name"
              name="name"
              onChange={this.handleNameChange}
              value={nameValue}
            />

            {filters.map(({ id, type, values }) => {
              switch (type) {
                case FILTER_TYPES.DATE:
                  return (
                    <FiltersFieldDate
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
                    <FiltersFieldSelect
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
                    <FiltersFieldText
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
