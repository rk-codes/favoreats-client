import React from 'react';

export default function DishReview(props) {
    return(
        <div className="dish-review">
            <p>Date: {props.date}</p>
            <span>Rating: {props.rating}</span>
            <p>Review: {props.review}</p>
        </div>
    )
}