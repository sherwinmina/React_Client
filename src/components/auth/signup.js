import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

i
class Signup extends Component {
  render () {
    const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
    <form >
      <fieldset className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control" {...email} />
      </fieldset>
    </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup);
