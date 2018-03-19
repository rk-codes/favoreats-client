import React from 'react';
import { connect } from 'react-redux';
import DishReview from './dish-review';
import store from '../store';
import { fetchAllReviewsOfDish } from '../actions';

export  class DishReviewsList extends React.Component{

    componentDidMount() {
        this.props.fetchAllReviewsOfDish();
    }
    render() {
        console.log("DishReviewsList");
        console.log(store.getState());
        const restaurantId = this.props.match.params.restaurantId;
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
            <h3>Restaurant Name: {this.props.restaurants[restaurantId].name}</h3>
            <h4>Dish Name</h4>
                <ul>
                    {dishReviews}
                </ul>
            </div>
        )
    }  
}
const mapStateToProps = (state) => {
    return{
        restaurants: state.restaurant.restaurants,
        dishes: state.restaurant.dishes
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllReviewsOfDish: () => dispatch(fetchAllReviewsOfDish()),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishReviewsList);

