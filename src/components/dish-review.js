import React from 'react';

export default function DishReview(props) {
    console.log(props);
    return(
        <div className="dish-review">
            <p>Date: {props.reviewDate}</p>
            <span>Rating: {props.rating}</span>
            <p>Review: {props.description}</p>
        </div>
    )
}