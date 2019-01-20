import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SPOTIFY_AUTH_REDIRECT_URL } from '../../constants/spotify';

const onLoginClick = () => {
  window.location.href = SPOTIFY_AUTH_REDIRECT_URL;
};

const Login = ({ className }) => (
  <div className={classNames(className, 'Login')}>
    <button type="button" onClick={onLoginClick}>
      Login
    </button>
  </div>
);

Login.propTypes = {
  className: PropTypes.string
};

Login.defaultProps = {
  className: ''
};

export default Login;
