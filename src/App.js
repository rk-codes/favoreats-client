import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


import './App.css';

import LandingPage from './components/landing-page';
import LoginForm from './components/login-form';
import RegistrationPage from './components/registration-page';
import HomePage from './components/home-page';
import RestaurantInfo from './components/restaurant-info';
import DishInfo from './components/dish-info';
import DishesList from './components/dishes-list';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={RegistrationPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/restaurant/:restaurantId" component={RestaurantInfo} />
          <Route exact path="/restaurant/:restaurantId/dishes" component={DishesList} />
          <Route exact path="/restaurant/:restaurantId/dish/:dishId" component={DishInfo} />
        </div>   
      </Router>
    );
  }
}


