import React from 'react';
import { connect } from 'react-redux';

import RestaurantInfo from './restaurant-info';

class  RestaurantsList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const info = this.props.restaurants.map((item, index) =>
            <li key={index}>
                <RestaurantInfo {...item} />
            </li>
        );

        return(    
            <div className="restaurants-list">
                <h1>Restaurants List</h1>
                <ul>
                    {info}
                </ul>
                <button>Add Restaurant</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurants: state.restaurant.restaurants
    }
}
export default connect(mapStateToProps)(RestaurantsList);