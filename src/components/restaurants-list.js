import React from "react";
import RestaurantInfo from "../containers/restaurant-info";
import PropTypes from "prop-types";
import "./restaurants-list.css";

export default class RestaurantsList extends React.Component {
  static propTypes = {
    fetchAllRestaurants: PropTypes.func.isRequired,
    //restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
    restaurants: PropTypes.objectOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    this.props.fetchAllRestaurants();
  }
  render() {
    const restaurant = Object.values(this.props.restaurants).map(
      (item, index) => (
        <li key={index}>
          <RestaurantInfo {...item} />
        </li>
      )
    );
    if (restaurant.length > 0) {
      return (
        <div className="restaurants-list">
          <h1>Restaurants</h1>
          <ul>{restaurant}</ul>
        </div>
      );
    } else {
      return (
        <div className="restaurants-empty">
          <h3>Start adding restaurants by clicking 'Add Restaurant'</h3>
        </div>
      );
    }
  }
}
