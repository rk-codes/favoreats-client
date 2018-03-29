import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import DishInfo from "./dish-info";
import "./dishes-list.css";

export default class DishesList extends React.Component {
  static propTypes = {
    fetchAllDishes: PropTypes.func.isRequired,
    restaurants: PropTypes.objectOf(PropTypes.object).isRequired,
    dishes: PropTypes.objectOf(PropTypes.object).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        restaurantId: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    // const dishesLength = get (this.props.restaurants,[this.props.match.params.restaurantId, 'dishIds', 'length']) ;

    //   if (dishesLength) {
    //console.log(this.props.match.params.restaurantId);
    this.props.fetchAllDishes(this.props.match.params.restaurantId);
    //   }
  }

  onAddClick() {
    this.props.history.push(
      `/restaurants/${this.props.match.params.restaurantId}/dishes/adddish`
    );
  }

  render() {
    console.log(this.props);
    let restaurantId;
    restaurantId = this.props.match.params.restaurantId;

    const dishIds =
      get(this.props.restaurants, [restaurantId, "dishIds"]) || [];

    //iterate dishes{} to find the dish objects where dish.id == dishId
    const dishesList = dishIds.map(id => this.props.dishes[id]);
    const dishes = Object.values(dishesList).map((item, index) => (
      <li key={index}>
        <DishInfo {...item} />
      </li>
    ));
    const restaurant = this.props.restaurants[restaurantId] || {};
    return (
      <div className="dishes-list">
        <div className="dishes-restbox">
          <h3>Restaurant Name: {restaurant.name}</h3>
          <p>
            <i className="fa fa-tag" aria-hidden="true" />
            {restaurant.cuisine}
          </p>
          <span>Dishes: {dishIds.length}</span>
          <div>
            <button className="add-button" onClick={() => this.onAddClick()}>
              Add dish
            </button>
          </div>
        </div>
        <div>
          <ul className="dish-flex-container">{dishes}</ul>
        </div>
      </div>
    );
  }
}
