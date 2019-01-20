import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';
import { getFilters } from './actions';

@connect(
  null,
  { getFilters }
)
class Filters extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    getFilters: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: ''
  };

  componentDidMount() {
    this.props.getFilters();
  }

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(className, 'Filters')}>
        <SectionHeader title="Filters" />

        <label className="Filters__field" htmlFor="name">
          <span className="Filters__label">Name</span>
          <input className="Filters__input" type="text" placeholder="Search..." name="name" />
        </label>
      </div>
    );
  }
}

export default Filters;
