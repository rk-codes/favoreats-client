import React from "react";
import "./dish-review.css";

export default function DishReview(props) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const reviewDate = new Date(props.reviewDate).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <div className="dish-review">
      <div className="date-box">
        <span>
          <i className="fa fa-calendar-o" />
        </span>
        <p>{reviewDate}</p>
      </div>
      <div className="review-box">
        <span>
          Rating:
          <div className="rating">{props.rating}</div>
        </span>
        <p>
          <i className="fa fa-comment-o" />
          <span className="comment">{props.description}</span>
        </p>
      </div>
    </div>
  );
}
