import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const Field = ({ children, className, label, name }) => (
  <label className={classNames(className, 'Field')} htmlFor={name}>
    {label && <span className="Field__label">{label}</span>}
    {children}
  </label>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};

Field.defaultProps = {
  className: '',
  label: null
};

export default Field;
