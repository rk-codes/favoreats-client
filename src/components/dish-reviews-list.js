import React from "react";
import { Link } from "react-router-dom";
import DishReview from "./dish-review";
import PropTypes from "prop-types";
import { get } from "lodash";
import "./dish-reviews-list.css";

export default class DishReviewsList extends React.Component {
  static propTypes = {
    fetchAllReviewsOfDish: PropTypes.func.isRequired,
    restaurants: PropTypes.objectOf(PropTypes.object).isRequired,
    dishes: PropTypes.objectOf(PropTypes.object).isRequired,
    reviews: PropTypes.objectOf(PropTypes.object).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        restaurantId: PropTypes.string.isRequired,
        dishId: PropTypes.string.isRequired
      })
    })
  };
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

    const reviewsList = reviewIds.map(id => reviews[id]).sort((a, b) => {
      return (
        new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime()
      );
    }); //get the reviews for each review id
    const dishReviews = reviewsList.map((item, index) => (
      <li key={index}>
        <DishReview {...item} />
      </li>
    ));

    return (
      <div className="reviews">
        <div className="rest-info">
          <p className="rest-name">Restaurant Name: {restaurant.name}</p>
          <div className="dishes-count">
            <Link to={`/restaurants/${restaurantId}/dishes`}>
              <i className="fa fa-spoon" aria-hidden="true" /> {dishesCount}
            </Link>
          </div>

          <p className="dish-name">Dish: {dish.name}</p>
        </div>
        <ul className="reviews-flex-container">{dishReviews}</ul>
      </div>
    );
  }
}
