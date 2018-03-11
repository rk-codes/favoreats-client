import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {deleteRestaurant} from '../actions';

 class RestaurantInfo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    onDelete(){
        console.log("Delete Clicked");
        this.props.deleteRestaurant({restaurant:{}});
    }
    onEdit() {
        console.log("Edit Clicked");
    }
    render() {
        return(
            <div className="restaurant-info">
                <Link to= {`/restaurants/${this.props.id}/dishes`}>Restaurant Name: {this.props.name}</Link>
                <p>Location: {this.props.location}</p>
                <span>Cuisine: {this.props.cuisine}</span>
                <p>Dishes Count: {this.props.dishCount}</p>
                <button onClick={() => this.onEdit()}>Edit</button>
                <button onClick={() => this.onDelete()}>Delete</button>
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
    return({
        deleteRestaurant: () => dispatch(deleteRestaurant())
    })
   
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo);

//Delete clicked -> dispatch action to delete the restaurant -> Redirect to the restaurants list page