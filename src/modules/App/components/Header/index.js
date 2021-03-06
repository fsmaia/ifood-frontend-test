import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import './index.scss';
import { isAuthorizedSelector } from '../../../Authorization/selectors';
import { clearAuthorizationAccessToken } from '../../../Authorization/actions';
import Button from '../../../UI/components/Button';

const enhance = compose(
  connect(
    state => ({
      authorized: isAuthorizedSelector(state)
    }),
    { clearAuthorizationAccessToken }
  ),
  withHandlers({
    onLogoutClick: props => props.clearAuthorizationAccessToken
  })
);

const AppHeader = ({ authorized, className, onLogoutClick }) => (
  <header className={classNames(className, 'AppHeader')}>
    <div className="AppHeader__container">
      <img src="/spotify-inverted.png" className="AppHeader__logo" alt="logo" />

      {authorized && (
        <Button type="button" className="AppHeader__logout" text="Logout" onClick={onLogoutClick} />
      )}
    </div>
  </header>
);

AppHeader.propTypes = {
  authorized: PropTypes.bool,
  className: PropTypes.string,
  onLogoutClick: PropTypes.func.isRequired
};

AppHeader.defaultProps = {
  authorized: false,
  className: ''
};

export default enhance(AppHeader);
