import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FiltersField from '../Field';
import './index.scss';

const FiltersFieldSelect = ({ className, label, name, value: fieldValue, values, ...props }) => (
  <FiltersField
    className={classNames(className, 'FiltersFieldSelect')}
    label={label}
    name={name}
    value={fieldValue}
  >
    <select className="FiltersFieldSelect__input" placeholder="Search..." name={name} {...props}>
      {values.map(({ name: optionName, value }) => (
        <option key={value} value={value}>
          {optionName}
        </option>
      ))}
    </select>
  </FiltersField>
);

FiltersFieldSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

FiltersFieldSelect.defaultProps = {
  className: ''
};

export default FiltersFieldSelect;
