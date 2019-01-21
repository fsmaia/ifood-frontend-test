import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Field from '../Field';
import './index.scss';

const FieldText = ({ className, label, name, placeholder, ...props }) => (
  <Field className={classNames(className, 'FieldText')} label={label} name={name}>
    <input
      className="FieldText__input"
      type="text"
      placeholder={placeholder}
      name={name}
      {...props}
    />
  </Field>
);

FieldText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

FieldText.defaultProps = {
  className: '',
  label: null,
  placeholder: 'Search...'
};

export default FieldText;
