import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Button = ({ className, icon, secondary, text, type, ...props }) => (
  <button
    className={classNames(className, 'Button', secondary && 'Button--secondary')}
    type={type}
    {...props}
  >
    {icon && <img className="Button__icon" src={icon} alt={text} />}
    <span className="Button__text">{text}</span>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  icon: null,
  secondary: false,
  type: 'button'
};

export default Button;
