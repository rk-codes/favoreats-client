import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDish } from "../actions";
import DishInfo from "../components/dish-info";

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants,
    dishes: state.restaurant.dishes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteDish: (restId, dishId) => dispatch(deleteDish(restId, dishId))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishInfo)
);
