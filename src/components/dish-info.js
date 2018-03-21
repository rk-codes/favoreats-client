import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteDish} from '../actions';


export  class DishInfo extends React.Component{
    onDelete() {
        this.props.deleteDish(this.props.match.params.restaurantId, this.props.id);
    }
    render() {
        console.log(this.props);
        return(
            <div className="dish-info">
                <h3>DishInfo</h3>
                <p>Dish Name: {this.props.name}</p>
                <p>Rating: {this.props.rating}</p>
                <button onClick={() => this.onDelete()}>Delete</button>
               
                <Link to={`/restaurants/${this.props.match.params.restaurantId}/dishes/${this.props.id}/reviews/addreview`}>Add review</Link>
                <Link to={`/restaurants/${this.props.match.params.restaurantId}/dishes/${this.props.id}/reviews`}>View past reviews</Link>
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
        deleteDish: (restId, dishId) => dispatch(deleteDish(restId, dishId)),
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DishInfo));