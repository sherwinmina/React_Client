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
      <fieldset className="form-group">
        <label htmlFor="">Password:</label>
        <input type="text" className="form-control" {...password} type="password" />
        {password.error}
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="">Confirm Password:</label>
        <input type="text" className="form-control" {...passwordConfirm} type="password" />
      </fieldset>
      <button action="submit" className="btn btn-primary">Sign up</button>
    </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  
  if (formProps.password !== formprops.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);
