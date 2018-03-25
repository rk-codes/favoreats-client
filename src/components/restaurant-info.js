import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteRestaurant, editRestaurant } from "../actions";

class RestaurantInfo extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  onDelete() {
    this.props.deleteRestaurant(this.props.id);
  }
  onEdit() {
    this.props.history.push(`/editrestaurant/${this.props.id}`);
  }
  render() {
    return (
      <div className="restaurant-info">
        <Link to={`/restaurants/${this.props.id}/dishes`}>
          Restaurant Name: {this.props.name}
        </Link>
        <p>Location: {this.props.restLocation}</p>
        <span>Cuisine: {this.props.cuisine}</span>
        <p>Dishes Count: {this.props.dishIds.length}</p>
        <button onClick={() => this.onEdit()}>Edit</button>
        <button onClick={() => this.onDelete()}>Delete</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: restaurantId => dispatch(deleteRestaurant(restaurantId)),
    editRestaurant: () => dispatch(editRestaurant())
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo)
);

//Delete clicked -> dispatch action to delete the restaurant -> Redirect to the restaurants list page
