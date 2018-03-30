export function normalizeRestaurant(restaurant) {
  return {
    [restaurant.id]: {
      id: restaurant.id,
      name: restaurant.name,
      restLocation: restaurant.location,
      cuisine: restaurant.cuisine,
      dishIds: restaurant.dishes || []
    }
  };
}

export function normalizeDish(dish) {
  return {
    [dish.id]: {
      id: dish.id,
      name: dish.name,
      latestRating: dish.latestRating,
      reviewIds: dish.reviews
    }
  };
}
export function normalizeReview(review) {
  return {
    [review.id]: {
      id: review.id,
      reviewDate: review.reviewDate,
      rating: review.rating,
      description: review.description
    }
  };
}
/*
    return{
        restaurants: {}
        dishes: {}
        reviews: {}
    }
  
    restaurant has dishIds attributes and not dishes attribute
    dishes attribute behave the same way as above
*/

//restuarant - mongoose document
