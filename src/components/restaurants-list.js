import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantInfo from './restaurant-info';

export default function RestaurantsList() {
    return(
        <div className="restaurants-list">
            <h1>Restaurants List</h1>
            <RestaurantInfo />
        </div>
    )
}