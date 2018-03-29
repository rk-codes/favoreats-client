import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DishesList from "../components/dishes-list";
import { fetchAllDishes } from "../actions";

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
