import React from "react";
import { reduxForm, Field } from "redux-form";
import { addDishReview } from "../actions";

export class AddDishReview extends React.Component {
  onSubmit(values, dispatch) {
    const { restaurantId, dishId } = this.props.match.params;
    dispatch(addDishReview(restaurantId, dishId, values));
    this.props.history.push(
      `/restaurants/${restaurantId}/dishes/${dishId}/reviews`
    );
  }
  onCancelClick() {
    const { restaurantId, dishId } = this.props.match.params;
    this.props.history.push(`/restaurants/${restaurantId}/dishes`);
  }
  render() {
    return (
      <div>
        <h3>Dish name</h3>
        <form
          className="add-review-form"
          onSubmit={this.props.handleSubmit((values, dispatch) =>
            this.onSubmit(values, dispatch)
          )}
        >
          <fieldset>
            <legend>Add review form</legend>
            <label htmlFor="rating">Rating</label>
            <Field name="rating" type="text" component="input" />
            <label htmlFor="description">Review</label>
            <Field name="description" type="text" component="input" />
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
