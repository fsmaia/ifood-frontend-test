import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Field from '../Field';
import './index.scss';
import { FilterOptionShape } from '../../../Filters/shapes';

const FieldSelect = ({ className, label, name, value: fieldValue, values, ...props }) => (
  <Field
    className={classNames(className, 'FieldSelect')}
    label={label}
    name={name}
    value={fieldValue}
  >
    <select className="FieldSelect__input" placeholder="Search..." name={name} {...props}>
      {values.map(({ name: optionName, value }) => (
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
  value: PropTypes.string,
  values: PropTypes.arrayOf(FilterOptionShape)
};

FieldSelect.defaultProps = {
  className: '',
  value: undefined,
  values: []
};

export default FieldSelect;
