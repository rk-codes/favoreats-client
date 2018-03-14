import React from 'react';
import { connect } from 'react-redux';

import DishInfo from './dish-info';
import { fetchAllDishes, addDish } from '../actions';
import store from '../store';

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
        console.log(this.props);
        this.props.addDish(); //To be changed later to render add dish form
    }

    render() {
        console.log(store.getState());
        const dishes = Object.values(this.props.dishes).map((item,index) => 
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
        addDish: () => dispatch(addDish()) //To be moved to add dish form
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishesList);


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 