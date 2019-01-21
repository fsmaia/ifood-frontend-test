import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Field from '../Field';
import './index.scss';

const FieldDate = ({ className, label, name, ...props }) => (
  <Field className={classNames(className, 'FieldDate')} label={label} name={name}>
    <input
      className="FieldDate__input"
      type="text"
      placeholder="Search..."
      name={name}
      {...props}
    />
  </Field>
);

FieldDate.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

FieldDate.defaultProps = {
  className: ''
};

export default FieldDate;
