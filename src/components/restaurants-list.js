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

  // onAddClick() {
  //   //render the add-restaurant form
  //   this.props.history.push("/addrestaurant");
  // }
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
        <h1>Restaurants</h1>
        <ul>{restaurant}</ul>
      </div>
    );
  }
}
