import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Field from '../Field';
import './index.scss';
import { FilterOptionShape } from '../../../Filters/shapes';

const FieldSelect = ({ className, label, name, value: fieldValue, options, ...props }) => (
  <Field
    className={classNames(className, 'FieldSelect')}
    label={label}
    name={name}
    value={fieldValue}
  >
    <select className="FieldSelect__input" placeholder="Search..." name={name} {...props}>
      {options.map(({ name: optionName, value }) => (
        <option key={value} value={value}>
          {optionName}
        </option>
      ))}
    </select>
  </Field>
);

FieldSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(FilterOptionShape),
  value: PropTypes.string
};

FieldSelect.defaultProps = {
  className: '',
  options: [],
  value: undefined
};

export default FieldSelect;
