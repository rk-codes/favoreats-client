export function normalizeRestaurant(restaurant) {
    return{
        [restaurant.id]: {
            id: restaurant.id,
            name: restaurant.name,
            location: restaurant.location,
            cuisine: restaurant.cuisine,
            dishIds: restaurant.dishes.map(dish => dish.id)
        }
    }
}

export function normalizeDish(dish) {
    return {
        [dish.id]: {
            id: dish.id,
            name: dish.name
        }
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

