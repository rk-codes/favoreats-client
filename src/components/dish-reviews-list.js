import React from 'react';
import { connect } from 'react-redux';
import DishReview from './dish-review';
import { fetchAllReviewsOfDish } from '../actions';

export  class DishReviewsList extends React.Component{

    componentDidMount() {
        this.props.fetchAllReviewsOfDish();
    }
    render() {
        console.log("DishReviewsList");
        const restaurantId = this.props.match.params.restaurantId;
        const dishId = this.props.match.params.dishId;
        const reviewIds = this.props.dishes[dishId].reviewIds; //get all reviewIds of the dish
   
        const reviewsList = reviewIds.map(id => this.props.reviews[id]) //get the reviews for each review id
        console.log(reviewsList);
        const reviews = Object.values(reviewsList).map((item,index) => 
            <li key={index}>
                <DishReview {...item} />
            </li>
        )

        return(
            <div className="reviews">
            <h3>Restaurant Name: {this.props.restaurants[restaurantId].name}</h3>
            <h4>Dish Name</h4>
                <ul>
                    {reviews}
                </ul>
            </div>
        )
    }  
}
const mapStateToProps = (state) => {
    return{
        restaurants: state.restaurant.restaurants,
        dishes: state.restaurant.dishes,
        reviews: state.restaurant.reviews
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllReviewsOfDish: () => dispatch(fetchAllReviewsOfDish()),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishReviewsList);

