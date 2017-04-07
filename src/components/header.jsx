import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Sign in
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state.auth.authencated
}

export default connect()(Header);
