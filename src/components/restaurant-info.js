import React from 'react';
import {Link} from 'react-router-dom';


export default function RestaurantInfo(props) {
    return(
        <div className="restaurant-info">
            <Link to= {`/restaurant/${props.id}/dishes`}>Restaurant Name: {props.name}</Link>
            <p>Location: {props.location}</p>
            <span>Cuisine: {props.cuisine}</span>
            <p>Dishes Count: {props.dishCount}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}