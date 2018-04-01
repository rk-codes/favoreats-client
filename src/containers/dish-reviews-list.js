import { connect } from "react-redux";
import { fetchAllReviewsOfDish } from "../actions";
import DishReviewsList from "../components/dish-reviews-list";

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
