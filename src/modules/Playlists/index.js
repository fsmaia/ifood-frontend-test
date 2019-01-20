import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFeaturedPlaylists } from './actions';
import { getAuthorizationTokenSelector } from '../Authorization/selectors';

@connect(
  state => ({
    token: getAuthorizationTokenSelector(state)
  }),
  { getFeaturedPlaylists }
)
class Playlists extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    getFeaturedPlaylists: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  componentDidMount() {
    const { token } = this.props;

    this.props.getFeaturedPlaylists(token);
  }

  render() {
    const { className } = this.props;

    return <div className={classNames(className, 'Playlists')}>Playlists</div>;
  }
}

export default Playlists;
