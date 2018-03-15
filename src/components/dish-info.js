import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteDish} from '../actions';


export  class DishInfo extends React.Component{
    render() {
        return(
            <div className="dish-info">
                <h3>DishInfo</h3>
                <p>Dish Name: {this.props.name}</p>
                <p>Rating: {this.props.rating}</p>
                <button onClick={() => this.onDelete()}>Delete</button>
               
                <Link to={`/restaurants/1/dishes/${this.props.dishId}/addreview`}>Add review</Link>
                <Link to={`/restaurants/1/dishes/${this.props.dishId}/reviews`}>View past reviews</Link>
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
        deleteDish: () => dispatch(deleteDish()),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishInfo);