export function normalizeRestaurant(restaurant) {
console.log(restaurant.dishes);
console.log(restaurant.dishes.map(dish => dish.id))
return{
    restaurants: {
        [restaurant.id]: {
            name: restaurant.name,
            location: restaurant.location,
            cuisine: restaurant.cuisine
        }
    },
    dishes: restaurant.dishes.map(dish => dish.id),
    reviews: {}
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