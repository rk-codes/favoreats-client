import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";
import "./login-form.css";

export class LoginForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/home");
    }
  }
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
          />
          <button
            className="login-button"
            disabled={this.props.pristine || this.props.submitting}
          >
            Log in
          </button>
          <p className="demo">
            For Demo:<br />username: demouser<br />password: demopassword
          </p>
        </fieldset>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});
const withState = connect(mapStateToProps);

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(withState(LoginForm));
