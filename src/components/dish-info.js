import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { get } from "lodash";
import "./dish-info.css";

export default class DishInfo extends React.Component {
  static propTypes = {
    deleteDish: PropTypes.func,
    reviewIds: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    name: PropTypes.string,
    latestRating: PropTypes.number,
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
    const isPlural = reviewsCount !== 1;
    const guessNoun = isPlural ? "reviews" : "review";
    return (
      <div className="dish-info">
        <div className="dish-data">
          <i className="fa fa-spoon" aria-hidden="true" />
          <p>{this.props.name}</p>
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
              {reviewsCount} {guessNoun}
            </Link>
          </span>
        </div>
      </div>
    );
  }
}
