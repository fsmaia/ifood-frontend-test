import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FiltersField from '../Field';
import './index.scss';

const FiltersFieldDate = ({ className, label, name, ...props }) => (
  <FiltersField className={classNames(className, 'FiltersFieldDate')} label={label} name={name}>
    <input
      className="FiltersFieldDate__input"
      type="text"
      placeholder="Search..."
      name={name}
      {...props}
    />
  </FiltersField>
);

FiltersFieldDate.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

FiltersFieldDate.defaultProps = {
  className: ''
};

export default FiltersFieldDate;
