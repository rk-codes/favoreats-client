import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/landing-page";
import LoginForm from "./components/login-form";
import RegistrationPage from "./components/registration-page";
import HomePage from "./components/home-page";
import RestaurantInfo from "./components/restaurant-info";
import DishesList from "./components/dishes-list";
import AddRestaurantForm from "./components/add-restaurant-form";
import EditRestaurantForm from "./components/edit-restaurant-form";
import AddDishForm from "./components/add-dish-form";
import DishReviewsList from "./components/dish-reviews-list";
import AddDishReviewForm from "./components/add-dish-review-form";
import Header from "./components/header";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={RegistrationPage} />
            <Route exact path="/home" component={HomePage} />
            <Route
              exact
              path="/restaurants/:restaurantId"
              component={RestaurantInfo}
            />
            <Route
              exact
              path="/restaurants/:restaurantId/dishes"
              component={DishesList}
            />
            <Route
              exact
              path="/restaurants/:restaurantId/dishes/adddish"
              component={AddDishForm}
            />
            <Route
              exact
              path="/restaurants/:restaurantId/dishes/:dishId/reviews"
              component={DishReviewsList}
            />
            <Route
              exact
              path="/restaurants/:restaurantId/dishes/:dishId/reviews/addreview"
              component={AddDishReviewForm}
            />
            <Route exact path="/addrestaurant" component={AddRestaurantForm} />
            <Route
              exact
              path="/editrestaurant/:restaurantId"
              component={EditRestaurantForm}
            />
          </main>
        </div>
      </Router>
    );
  }
}
