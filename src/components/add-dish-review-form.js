import React from "react";
import { reduxForm, Field } from "redux-form";
import { addDishReview } from "../actions";
import Input from "./input";
import { required, nonEmpty } from "../validators";

export class AddDishReview extends React.Component {
  onSubmit(values) {
    const { restaurantId, dishId } = this.props.match.params;
    this.props.dispatch(addDishReview(restaurantId, dishId, values));
    this.props.history.push(
      `/restaurants/${restaurantId}/dishes/${dishId}/reviews`
    );
  }
  onCancelClick() {
    const { restaurantId } = this.props.match.params;
    this.props.history.push(`/restaurants/${restaurantId}/dishes`);
  }
  render() {
    return (
      <div>
        <h3>Dish name</h3>
        <form
          className="add-review-form"
          onSubmit={this.props.handleSubmit((values, dispatch) =>
            this.onSubmit(values)
          )}
        >
          <fieldset>
            <legend>Add review</legend>
            <label htmlFor="rating">Rating</label>
            <Field
              name="rating"
              type="text"
              component={Input}
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
            <button type="submit">Post</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "addreview"
})(AddDishReview);
