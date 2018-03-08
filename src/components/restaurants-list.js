import React from 'react';

import RestaurantInfo from './restaurant-info';

export default function RestaurantsList() {

    const data = [{
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

    const info = data.map((item, index) =>
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
            
        </div>
    )
}