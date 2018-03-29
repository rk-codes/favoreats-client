import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { get } from "lodash";
import "./dish-info.css";

export default class DishInfo extends React.Component {
  static propTypes = {
    deleteDish: PropTypes.func,
    reviewIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    latestRating: PropTypes.number.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        restaurantId: PropTypes.string.isRequired
      })
    })
  };

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
          <p>Latest Rating: {this.props.latestRating}</p>
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
