import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { editRestaurant } from "../actions";

export class EditRestaurantForm extends React.Component {
  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    const restaurant = this.props.restaurants[restaurantId];
    this.props.initialize({
      name: restaurant.name,
      location: restaurant.restLocation,
      cuisine: restaurant.cuisine
    });
  }

  handleSubmit(values) {
    console.log(values);
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
          this.onSubmit(values, dispatch)
        )}
      >
        {successMessage}
        {errorMessage}
        <fieldset>
          <legend>Edit restaurant</legend>
          <label htmlFor="name">Restaurant Name</label>
          <Field
            name="name"
            type="text"
            component="input"
            value={this.props.name}
          />
          <label htmlFor="location">City/State</label>
          <Field
            name="location"
            type="text"
            component="input"
            value={this.props.restLocation}
          />
          <label htmlFor="cuisine">Cuisine</label>
          <Field
            name="cuisine"
            type="text"
            component="input"
            value={this.props.cuisine}
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
const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  };
};
const withState = connect(mapStateToProps);
export default reduxForm({
  form: "editrestaurant"
})(withState(EditRestaurantForm));
