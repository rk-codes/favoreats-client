import React from 'react';


export default function DishInfo(props) {
     
    return(
        <div className="dish-info">
            <h3>DishInfo</h3>
            <p>Dish Name: {props.name}</p>
            <p>Rating: {props.rating}</p>
            <a href="">Add review </a>
            <a href="">View past reviews</a>
        </div>
    )
}