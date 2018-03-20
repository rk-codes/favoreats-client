import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {get} from 'lodash';

import DishInfo from './dish-info';
import { fetchAllDishes } from '../actions';
//import store from '../store';

class DishesList extends React.Component {
    
    componentDidMount() {    
        
        const restaurant = this.props.restaurants[this.props.match.params.restaurantId];
        if(restaurant.dishIds.length > 0) {
            console.log(this.props.match.params.restaurantId);
            this.props.fetchAllDishes(this.props.match.params.restaurantId);
        }
    }

    onAddClick(){
        this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}/dishes/adddish`)
    }

    render() {
        //console.log(store.getState());
        let restaurantId;
        restaurantId = this.props.match.params.restaurantId;
        const dishIds = this.props.restaurants[restaurantId].dishIds  // get all dish ids of this restaurant
     
        //const dishIds = get(this.props.restaurants, [restaurantId, 'dishIds']) || [];
        console.log(dishIds);
        //iterate dishes{} to find the dish objects where dish.id == dishId
        const dishesList = dishIds.map(id => this.props.dishes[id])
        const dishes = Object.values(dishesList).map((item,index) => 
            <li key={index}>
                <DishInfo {...item} />
            </li>
        )
        return(
            <div className="dishes-list">
                <h3>Restaurant Name: {this.props.restaurants[restaurantId].name}</h3>
                <p>Cuisine: {this.props.restaurants[restaurantId].cuisine}</p>
                <span>Dishes count: {this.props.restaurants[restaurantId].dishCount}</span>
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
        fetchAllDishes: (restaurantId) => dispatch(fetchAllDishes(restaurantId)),
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DishesList));


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 