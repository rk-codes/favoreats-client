import React from 'react';
import {Link} from 'react-router-dom';

export default function DishInfo(props) {
     
    return(
        <div className="dish-info">
            <h3>DishInfo</h3>
            <p>Dish Name: {props.name}</p>
            <p>Rating: {props.rating}</p>
           
            <Link to={`/restaurants/1/dishes/${props.dishId}/addreview`}>Add review</Link>
            <Link to={`/restaurants/1/dishes/${props.dishId}/reviews`}>View past reviews</Link>
        </div>
    )
}