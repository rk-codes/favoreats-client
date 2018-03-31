import React from "react";
import { reduxForm, Field } from "redux-form";
import { addRestaurant } from "../actions";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import "./add-restaurant-form.css";

export default class AddRestaurantForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(addRestaurant(values));
    this.props.history.push("/home");
  }
  onCancelClick() {
    this.props.history.push("/home");
  }
  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <form
        className="add-restaurant-form"
        onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values)
        )}
      >
        {successMessage}
        {errorMessage}
        <fieldset>
          <legend>Add restaurant</legend>
          <label htmlFor="name">Restaurant Name</label>
          <Field
            name="name"
            type="text"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <label htmlFor="location">City/State</label>
          <Field
            name="location"
            type="text"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <label htmlFor="cuisine">Cuisine</label>
          <Field
            name="cuisine"
            type="text"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <button
            className="cancel-button"
            type="button"
            onClick={() => this.onCancelClick()}
          >
            Cancel
          </button>
          <button type="submit">Add</button>
        </fieldset>
      </form>
    );
  }
}
