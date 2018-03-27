import React from "react";
import "./dish-review.css";

export default function DishReview(props) {
  return (
    <div className="dish-review">
      <div className="date-box">
        <span>
          <i class="fa fa-calendar-o" />
        </span>
        <p>{props.reviewDate}</p>
      </div>
      <div className="review-box">
        <span>Rating: {props.rating}</span>
        <p>
          <i class="fa fa-comment-o" />
          <span className="comment">{props.description}</span>
        </p>
      </div>
    </div>
  );
}
