import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchAllRestaurants } from "../actions";
import RestaurantsList from "../components/restaurants-list";

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
