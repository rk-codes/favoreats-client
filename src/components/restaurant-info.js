import React from 'react';


export default function RestaurantInfo(props) {
    return(
        <div className="restaurant-info">
            <span>Restaurant Name: {props.name}</span>
            <p>Location: {props.location}</p>
            <span>Cuisine: {props.cuisine}</span>
            <p>Dishes Count: {props.dishCount}</p>
        </div>
    )
}