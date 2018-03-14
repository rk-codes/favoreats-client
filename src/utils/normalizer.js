export function normalizeRestaurant(restaurant) {
    //console.log(restaurant.dishes);
    //console.log(restaurant.dishes.map(dish => dish.id))
    return{
        restaurants: {
            [restaurant.id]: {
                name: restaurant.name,
                location: restaurant.location,
                cuisine: restaurant.cuisine,
                dishIds: restaurant.dishes.map(dish => dish.id)
            }
        },
        dishes: {
            [restaurant.dishes.id]: {
                name: restaurant.dishes.name,
                //reviewIds: restaurant.dishes.reviews.map(review => review.id)
            }
        },
        reviews: {}
    }
}

export function normalizeDish(dish) {
    return {
       // dishes: {
            [dish.id]: {
                name: dish.name
            }
        //}
    }
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

