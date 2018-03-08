import React from 'react';
import DishReview from './dish-review';

export default function DishReviewsList(props) {
    const reviews=[{
        date: '4/5/2017',
        rating: '3',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        date: '5/6/2017',
        rating: '4',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
    ]

    const dishReviews = reviews.map((item, index) =>
        <li key={index}>
            <DishReview {...item} />
        </li>
    )
    return(
        <div className="reviews">
        <h3>Dish Name</h3>
            <ul>
                {dishReviews}
            </ul>
        </div>
    )
}