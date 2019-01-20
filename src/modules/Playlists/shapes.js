import PropTypes from 'prop-types';

export const PlaylistImageShape = PropTypes.shape({
  height: PropTypes.number,
  width: PropTypes.number,
  url: PropTypes.string
});

export const PlaylistShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PlaylistImageShape)
});
