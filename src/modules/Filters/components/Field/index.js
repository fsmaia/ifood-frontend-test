import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const FiltersField = ({ children, className, label, name }) => (
  <label className={classNames(className, 'FiltersField')} htmlFor={name}>
    <span className="FiltersField__label">{label}</span>
    {children}
  </label>
);

FiltersField.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

FiltersField.defaultProps = {
  className: ''
};

export default FiltersField;
