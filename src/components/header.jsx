import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    <li className="nav-item">
          Sign in
    </li>
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
