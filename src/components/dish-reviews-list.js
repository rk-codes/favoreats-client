import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DishReview from "./dish-review";
import { fetchAllReviewsOfDish } from "../actions";
import { get } from "lodash";
import "./dish-reviews-list.css";

export class DishReviewsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllReviewsOfDish(
      this.props.match.params.restaurantId,
      this.props.match.params.dishId
    );
  }
  render() {
    const {
      match: { params: { restaurantId, dishId } },
      dishes,
      restaurants,
      reviews
    } = this.props;
    //const restaurantId = params.restaurantId;
    const restaurant = restaurants[restaurantId] || {};
    // const dishId = params.dishId;
    const dish = dishes[dishId] || {};
    const dishesCount = get(restaurant, ["dishIds", "length"]) || 0;
    const reviewIds = get(dish, ["reviewIds"]) || []; //get all reviewIds of the dish

    const reviewsList = reviewIds.map(id => reviews[id]); //get the reviews for each review id
    const dishReviews = reviewsList.map((item, index) => (
      <li key={index}>
        <DishReview {...item} />
      </li>
    ));

    return (
      <div className="reviews">
        <h3>Restaurant Name: {restaurant.name}</h3>
        <span>
          <Link to={`/restaurants/${restaurantId}/dishes`}>
            {dishesCount} dishes
          </Link>
        </span>
        <h4>Dish Name: {dish.name}</h4>
        <ul className="reviews-flex-container">{dishReviews}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants,
    dishes: state.restaurant.dishes,
    reviews: state.restaurant.reviews
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllReviewsOfDish: (restaurantId, dishId) =>
      dispatch(fetchAllReviewsOfDish(restaurantId, dishId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DishReviewsList);
