import React from "react";

import RestaurantsList from "../containers/restaurants-list";
import { connect } from "react-redux";

import { fetchAllRestaurants } from "../actions";
import "./home-page.css";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchAllRestaurants();
  }

  render() {
    console.log("HOME");
    if (Object.getOwnPropertyNames(this.props.restaurants).length === 0) {
      console.log("home empty");
      return (
        <h3 className="welcome-msg">
          No restaurants added!<p>
            Click <span className="add-link">'Add Restaurant'</span> to start
            adding restaurants
          </p>
        </h3>
      );
    } else {
      return (
        <div>
          <RestaurantsList />
        </div>
      );
    }
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
