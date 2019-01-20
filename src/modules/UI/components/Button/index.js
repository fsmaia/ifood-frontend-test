import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Button = ({ className, icon, text, type, ...props }) => (
  <button className={classNames(className, 'Button')} type={type} {...props}>
    {icon && <img className="Button__icon" src={icon} alt={text} />}
    <span className="Button__text">{text}</span>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  type: 'button'
};

export default Button;
