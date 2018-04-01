import React from "react";
import { Field } from "redux-form";
import { addDish } from "../actions";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import "./add-dish-form.css";
import RatingDropdown from "./rating-dropdown";

export default class AddDishForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(addDish(this.props.match.params.restaurantId, values));
    this.props.history.push(
      `/restaurants/${this.props.match.params.restaurantId}/dishes`
    );
  }
  onCancelClick() {
    this.props.history.push(
      `/restaurants/${this.props.match.params.restaurantId}/dishes`
    );
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
        className="add-dish-form"
        onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values)
        )}
      >
        {successMessage}
        {errorMessage}
        <fieldset>
          <legend>Add dish</legend>
          <label htmlFor="name">Dish Name</label>
          <Field
            name="name"
            type="text"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <label htmlFor="rating">Rating</label>
          <Field
            name="rating"
            type="text"
            component={RatingDropdown}
            validate={[required, nonEmpty]}
          />
          <label htmlFor="description">Review</label>
          <Field
            name="description"
            type="text"
            component="textarea"
            validate={[required, nonEmpty]}
          />
          <button type="button" onClick={() => this.onCancelClick()}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </fieldset>
      </form>
    );
  }
}
