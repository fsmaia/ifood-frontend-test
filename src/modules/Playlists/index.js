import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Playlists = ({ className }) => (
  <div className={classNames(className, 'Playlists')}>Playlists</div>
);

Playlists.propTypes = {
  className: PropTypes.string
};

Playlists.defaultProps = {
  className: ''
};

export default Playlists;
