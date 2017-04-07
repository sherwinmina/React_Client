import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Signup extends Component {
  handleFormSubmit(formProps) {
    // call action creator to signup user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops</strong>{this.props.errorMessage}
        </div>
      );
    }
  }


  render () {
    const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
    <form onSubmit={handleSubmit(this.handleSubmit.bin(this))}>
      <fieldset className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control" {...email} />
        {email.touch && email.error && <div className="error">{email.error}</div>}
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="">Password:</label>
        <input type="text" className="form-control" {...password} type="password" />
        {password.touch && password.error && <div className="error">{password.error}</div>}
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="">Confirm Password:</label>
        <input type="text" className="form-control" {...passwordConfirm} type="password" />
         {passwordConfirm.touch && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
      </fieldset>
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign up</button>
    </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }
  
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  
  if (formProps.password !== formprops.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
