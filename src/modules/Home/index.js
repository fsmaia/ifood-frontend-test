import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Playlists from '../Playlists';
import Login from '../Login';
import { isAuthorizedSelector } from '../Authorization/selectors';
import Filters from '../Filters';
import './index.scss';

const enhance = connect(state => ({
  authorized: isAuthorizedSelector(state)
}));

const Home = ({ authorized, className }) => (
  <div className={classNames(className, 'Home')}>
    {!authorized && <Login className="Home__section Home__section--login" />}

    {authorized && <Filters className="Home__section Home__section--filters" />}

    {authorized && <Playlists className="Home__section Home__section--playlists" />}
  </div>
);

Home.propTypes = {
  authorized: PropTypes.bool,
  className: PropTypes.string
};

Home.defaultProps = {
  authorized: false,
  className: ''
};

export default enhance(Home);
