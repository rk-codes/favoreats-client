import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get } from "lodash";

import DishInfo from "./dish-info";
import { fetchAllDishes } from "../actions";
import "./dishes-list.css";

class DishesList extends React.Component {
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
    //console.log(store.getState());
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
          <p>Cuisine: {restaurant.cuisine}</p>
          <span>Dishes count: {dishIds.length}</span>
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
const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants,
    dishes: state.restaurant.dishes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllDishes: restaurantId => dispatch(fetchAllDishes(restaurantId))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishesList)
);

//Add dish clicked -> render add dish form -> rerender dishes list with the updated data
