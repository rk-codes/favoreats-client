import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import DishInfo from './dish-info';
import { fetchAllDishes } from '../actions';
import store from '../store';

class DishesList extends React.Component {
    
    componentDidMount() {
        this.props.fetchAllDishes(this.props.match.params.restaurantId);
    }

    onAddClick(){
        this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}/dishes/adddish`)
    }

    render() {
        const restaurantId = this.props.match.params.restaurantId;
        const dishIds = this.props.restaurants[restaurantId].dishIds  // get all dish ids of this restaurant
        //iterate dishes{} to find the dish objects where dish.id == dishId
        const dishesList = dishIds.map(id => this.props.dishes[id])
        const dishes = Object.values(dishesList).map((item,index) => 
            <li key={index}>
                <DishInfo {...item} />
            </li>
        )
        return(
            <div className="dishes-list">
                <h3>Restaurant Name: {this.props.restaurants.name}</h3>
                <p>Cuisine: {this.props.restaurants.cuisine}</p>
                <span>Dishes count: {this.props.restaurants.dishCount}</span>
                <ul>
                  {dishes}
                </ul>
                <button onClick = {() => this.onAddClick()}>Add dish</button>
            </div>
        )
    }
   
}
const mapStateToProps = (state) => {
    return{
        restaurants: state.restaurant.restaurants,
        dishes: state.restaurant.dishes
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllDishes: () => dispatch(fetchAllDishes()),
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DishesList));


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 