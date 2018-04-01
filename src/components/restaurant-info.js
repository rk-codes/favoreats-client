import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./restaurant-info.css";

export default class RestaurantInfo extends React.Component {
  static propTypes = {
    deleteRestaurant: PropTypes.func,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    restLocation: PropTypes.string.isRequired,
    dishIds: PropTypes.array.isRequired
  };

  onDelete() {
    this.props.deleteRestaurant(this.props.id);
  }
  onEdit() {
    this.props.history.push(`/editrestaurant/${this.props.id}`);
  }
  render() {
    const isPlural = this.props.dishIds.length !== 1;
    const guessNoun = isPlural ? "dishes" : "dish";
    return (
      <div className="restaurant-outer">
        <div className="restaurant-info">
          <div className="restaurant-details">
            <Link to={`/restaurants/${this.props.id}/dishes`}>
              Restaurant: {this.props.name}
            </Link>
            <p>Cuisine: {this.props.cuisine}</p>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true" />
              {this.props.restLocation}
            </p>
            <div className="restaurant-buttons">
              <button onClick={() => this.onEdit()}>
                <i className="fa fa-edit fa-lg" />
              </button>
              <button onClick={() => this.onDelete()}>
                <i className="fa fa-trash fa-lg" />
              </button>
            </div>
          </div>
          <div className="dish-count">
            <p>
              {this.props.dishIds.length} {guessNoun}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
