import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import LandingPage from './components/landing-page';
import LoginForm from './components/login-form';
import RegistrationForm from './components/registration-form';
import HomePage from './components/home-page';
import RestaurantInfo from './components/restaurant-info';
import DishInfo from './components/dish-info';
import DishesList from './components/dishes-list';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={RegistrationForm} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/restaurant/:restaurantId" component={RestaurantInfo} />
        <Route exact path="/restaurant/:restaurantId/dishes" component={DishesList} />
        <Route exact path="/restaurant/:restaurantId/dish/:dishId" component={DishInfo} />
        </div>   
      </Router>
    );
  }
}

export default App;
