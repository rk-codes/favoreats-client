import React from 'react';
import { connect } from 'react-redux';

import DishInfo from './dish-info';
import { fetchAllDishes } from '../actions';

class DishesList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    // }

    componentDidMount() {
        console.log("mount");
        this.props.fetchAllDishes();
    }

    onAddClick(){
        console.log("Clicked");
        //render add dish form
    
    }

    render() {
        console.log(this.props.restaurants);
        console.log(this.props.restaurants.dishes); // undefined ?
        let dishes;
        const info = this.props.restaurants.map((restaurant,index) => {
            dishes = restaurant.dishes.map((dish, index) => 
                <li key={index}>
                    <DishInfo {...dish} />
                </li>
            )
         })
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
        restaurants: state.restaurant.restaurants
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllDishes: () => dispatch(fetchAllDishes())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishesList);


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 