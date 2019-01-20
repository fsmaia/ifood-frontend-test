import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import { getFilters } from './actions';
import { getFiltersSelector, hasLoadedFiltersSelector } from './selectors';
import { FilterShape } from './shapes';
import { FILTER_TYPES } from './constants';
import FiltersFieldText from './components/FieldText';
import FiltersFieldSelect from './components/FieldSelect';
import FiltersFieldDate from './components/FieldDate';

@connect(
  state => ({
    filters: getFiltersSelector(state),
    loaded: hasLoadedFiltersSelector(state)
  }),
  { getFilters }
)
class Filters extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.arrayOf(FilterShape),
    getFilters: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired
  };

  static defaultProps = {
    className: '',
    filters: []
  };

  componentDidMount() {
    this.props.getFilters();
  }

  render() {
    const { className, filters, loaded } = this.props;

    return (
      <div className={classNames(className, 'Filters')}>
        <SectionHeader title="Filters" />

        {loaded && (
          <div className="Filters__fields">
            <FiltersFieldText className="Filters__field" label="name" name="name" />

            {filters.map(({ id, type, values }) => {
              switch (type) {
                case FILTER_TYPES.DATE:
                  return (
                    <FiltersFieldDate key={id} className="Filters__field" label={id} name={id} />
                  );
                case FILTER_TYPES.SELECT:
                  return (
                    <FiltersFieldSelect
                      key={id}
                      className="Filters__field"
                      label={id}
                      name={id}
                      values={values}
                    />
                  );
                case FILTER_TYPES.TEXT:
                default:
                  return (
                    <FiltersFieldText key={id} className="Filters__field" label={id} name={id} />
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
