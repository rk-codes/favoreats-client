import React from 'react';

import RestaurantInfo from './restaurant-info';

export default function RestaurantsList() {

    const data = [{
        name: 'ABC',
        location: 'San Francisco',
        cuisine: 'American',
        dishCount: '3'
    }]

    const info = data.map((data, index) => 
        <li key={index}>
            <RestaurantInfo {...data} />
        </li>
    );
    return(    
        <div className="restaurants-list">
            <h1>Restaurants List</h1>
            <ul>
                {info}
            </ul>
            
        </div>
    )
}