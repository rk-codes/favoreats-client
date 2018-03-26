import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteRestaurant, editRestaurant } from "../actions";
import "./restaurant-info.css";

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
      <div className="restaurant-outer">
        <div className="restaurant-info">
          <div className="restaurant-details">
            <Link to={`/restaurants/${this.props.id}/dishes`}>
              Restaurant Name: {this.props.name}
            </Link>
            <p>Location: {this.props.restLocation}</p>
            <span>Cuisine: {this.props.cuisine}</span>
            <div className="restaurant-buttons">
              <button onClick={() => this.onEdit()}>
                <i class="fa fa-edit fa-lg" />
              </button>
              <button onClick={() => this.onDelete()}>
                <i class="fa fa-trash fa-lg" />
              </button>
            </div>
          </div>
          <div className="dish-count">
            <p>{this.props.dishIds.length} Dishes </p>
          </div>
        </div>
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
