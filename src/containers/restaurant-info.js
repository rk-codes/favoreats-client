import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteRestaurant, editRestaurant } from "../actions";
import RestaurantInfo from "../components/restaurant-info";

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
