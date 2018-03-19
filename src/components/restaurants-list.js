import React from 'react';
import {connect} from 'react-redux';

import RestaurantInfo from './restaurant-info';
import {fetchAllRestaurants} from '../actions';
//import store from '../store';
import {withRouter} from 'react-router-dom';

class  RestaurantsList extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount() {
        this.props.fetchAllRestaurants();
    }

    onAddClick() {
        console.log("Add clicked");
        //render the add-restaurant form
        this.props.history.push('/addrestaurant');
    }
    render() {
        console.log(this.props.history)
        //console.log(store.getState());

        //const restaurants = this.props.restaurants;
        //console.log(restaurants);

        const restaurant = Object.values(this.props.restaurants).map((item, index) =>
            <li key={index}>
                <RestaurantInfo {...item} />
            </li>
        )
        return(    
            <div className="restaurants-list">
                <h1>Restaurants List</h1>
                <ul>
                    {restaurant}
                </ul>
                <button onClick ={() => this.onAddClick()}>Add Restaurant</button>
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
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
   
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantsList));