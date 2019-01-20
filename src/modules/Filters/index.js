import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';
import SectionHeader from '../App/components/SectionHeader';

const Filters = ({ className }) => (
  <div className={classNames(className, 'Filters')}>
    <SectionHeader title="Filters" />

    <label className="Filters__field" htmlFor="name">
      <span className="Filters__label">Name</span>
      <input className="Filters__input" type="text" placeholder="Search..." name="name" />
    </label>
  </div>
);

Filters.propTypes = {
  className: PropTypes.string
};

Filters.defaultProps = {
  className: ''
};

export default Filters;
