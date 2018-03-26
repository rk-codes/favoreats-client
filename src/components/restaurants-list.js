import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import RestaurantInfo from "./restaurant-info";
import { fetchAllRestaurants } from "../actions";
import "./restaurants-list.css";

class RestaurantsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllRestaurants();
  }

  onAddClick() {
    //render the add-restaurant form
    this.props.history.push("/addrestaurant");
  }
  render() {
    const restaurant = Object.values(this.props.restaurants).map(
      (item, index) => (
        <li key={index}>
          <RestaurantInfo {...item} />
        </li>
      )
    );
    return (
      <div className="restaurants-list">
        <h1>My Restaurants</h1>
        <ul>{restaurant}</ul>
        <button onClick={() => this.onAddClick()}>Add Restaurant</button>
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
    fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)
);
