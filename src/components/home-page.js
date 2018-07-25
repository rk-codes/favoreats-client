import React from "react";

import RestaurantsList from "../containers/restaurants-list";
import { connect } from "react-redux";

import { fetchAllRestaurants } from "../actions";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchAllRestaurants();
  }

  render() {
    console.log("HOME");
    if (Object.getOwnPropertyNames(this.props.restaurants).length === 0) {
      console.log("home empty");
      return <h3>Welcome! Start adding restaurants</h3>;
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
