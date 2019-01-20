import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FiltersField from '../Field';
import './index.scss';

const FiltersFieldText = ({ className, label, name, ...props }) => (
  <FiltersField className={classNames(className, 'FiltersFieldText')} label={label} name={name}>
    <input
      className="FiltersFieldText__input"
      type="text"
      placeholder="Search..."
      name={name}
      {...props}
    />
  </FiltersField>
);

FiltersFieldText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

FiltersFieldText.defaultProps = {
  className: ''
};

export default FiltersFieldText;
