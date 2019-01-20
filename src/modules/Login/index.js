import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SPOTIFY_AUTH_REDIRECT_URL } from '../../constants/spotify';
import './index.scss';
import Button from '../UI/components/Button';

const onLoginClick = () => {
  window.location.href = SPOTIFY_AUTH_REDIRECT_URL;
};

const Login = ({ className }) => (
  <div className={classNames(className, 'Login')}>
    <h1 className="Login__title">Welcome to Spotifood.</h1>

    <p className="Login__subtitle">
      This is where food and music universes meet. Begin your journey connecting to Spotify by using
      the button below.
    </p>

    <Button
      className="Login__button"
      icon="/spotify-inverted.png"
      text="Connect with Spotify"
      onClick={onLoginClick}
    />
  </div>
);

Login.propTypes = {
  className: PropTypes.string
};

Login.defaultProps = {
  className: ''
};

export default Login;
