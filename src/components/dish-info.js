import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDish } from "../actions";
import { get } from "lodash";
import "./dish-info.css";

export class DishInfo extends React.Component {
  onDelete() {
    this.props.deleteDish(this.props.match.params.restaurantId, this.props.id);
  }
  render() {
    const reviewsCount = get(this.props.reviewIds, ["length"]) || 0;
    return (
      <div className="dish-info">
        <div className="dish-data">
          <i className="fa fa-spoon" aria-hidden="true" />
          <p>Dish Name: {this.props.name}</p>
          <p>Rating: {this.props.latestRating}</p>
        </div>
        <div className="dish-buttons">
          <button className="delete-button" onClick={() => this.onDelete()}>
            <i className="fa fa-trash fa-lg" />
          </button>
          <span>
            <Link
              to={`/restaurants/${
                this.props.match.params.restaurantId
              }/dishes/${this.props.id}/reviews/addreview`}
            >
              Add review
            </Link>
          </span>
          <span>
            <Link
              to={`/restaurants/${
                this.props.match.params.restaurantId
              }/dishes/${this.props.id}/reviews`}
            >
              {reviewsCount} reviews
            </Link>
          </span>
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
    deleteDish: (restId, dishId) => dispatch(deleteDish(restId, dishId))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishInfo)
);
