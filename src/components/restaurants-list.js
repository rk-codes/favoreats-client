import React from 'react';
import { connect } from 'react-redux';

import RestaurantInfo from './restaurant-info';

class  RestaurantsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            restaurants: [{
                id: '1',
                name: 'ABC',
                location: 'San Francisco',
                cuisine: 'American',
                dishCount: '3' 
            },
            {
                id: '2',
                name: 'BCD',
                location: 'Las Vegas',
                cuisine: 'Mexican',
                dishCount: '1' 
            }]
        }
    }

    render() {
        const info = this.state.restaurants.map((item, index) =>
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
        restaurants: {...state.restaurants}
    }
}
export default connect(mapStateToProps)(RestaurantsList);