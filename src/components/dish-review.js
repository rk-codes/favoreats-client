import React from "react";
import "./dish-review.css";

export default function DishReview(props) {
  return (
    <div className="dish-review">
      <div className="date-box">
        <p>Date: {props.reviewDate}</p>
      </div>
      <div className="review-box">
        <span>Rating: {props.rating}</span>
        <p>Review: {props.description}</p>
      </div>
    </div>
  );
}
