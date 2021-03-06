import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import { connect } from 'react-redux';
import { saveAuthorizationAccessToken } from './actions';

@connect(
  null,
  { saveAccessToken: saveAuthorizationAccessToken }
)
class Authorization extends PureComponent {
  static propTypes = {
    hash: PropTypes.string,
    saveAccessToken: PropTypes.func.isRequired
  };

  static defaultProps = {
    hash: window.location.hash
  };

  state = {
    authorized: false
  };

  componentDidMount() {
    const { access_token: token } = parse(this.props.hash);

    if (token) {
      this.props.saveAccessToken(token);
      this.authorize();
    }
  }

  authorize = () => {
    this.setState({
      authorized: true
    });
  };

  render() {
    const { authorized } = this.state;

    if (authorized) {
      return <Redirect to="/" />;
    }

    return <div className="Authorization">Authenticating...</div>;
  }
}

export default Authorization;
