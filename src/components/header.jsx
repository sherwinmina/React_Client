import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a Link to log out
      <li className="nav-item">
        <Link className="nav-link" to="/signout"></Link>
      </li>
    } else {
      // Show a link to sign in or sign out
      return [
        <li className="nav-item">
           <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state.auth.authencated
}

export default connect()(Header);
