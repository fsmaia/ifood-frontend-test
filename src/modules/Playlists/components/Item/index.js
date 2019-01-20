import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const PlaylistsItem = ({ className, image, name }) => (
  <div className={classNames(className, 'PlaylistsItem')}>
    <img className="PlaylistsItem__image" src={image} alt={name} />
    <div className="PlaylistsItem__name">{name}</div>
  </div>
);

PlaylistsItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

PlaylistsItem.defaultProps = {
  className: ''
};

export default PlaylistsItem;
