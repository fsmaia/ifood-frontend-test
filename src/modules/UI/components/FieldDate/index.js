import 'react-datetime/css/react-datetime.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DateTime from 'react-datetime';
import Field from '../Field';
import './index.scss';

const FieldDate = ({ className, label, name, ...props }) => (
  <Field className={classNames(className, 'FieldDate')} label={label} name={name}>
    <DateTime
      className="FieldDate__picker"
      placeholder="Choose a day..."
      inputProps={{ className: 'FieldDate__input', name }}
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
