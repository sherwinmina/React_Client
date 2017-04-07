import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

i
class Signup extends Component {
  render () {
    return (
      <div>
        Sign Up
      </div>
    )
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirma']
})(Signup);
