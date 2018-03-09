export const FETCH_ALL_RESTAURANTS_SUCCESS = 'FETCH_ALL_RESTAURANTS_SUCCESS';
export const fetchAllRestaurantsSuccess = (data) => ({
    type: FETCH_ALL_RESTAURANTS_SUCCESS,
    data
})
export const FETCH_ALL_RESTAURANTS_ERROR = 'FETCH_ALL_RESTAURANTS_ERROR';
export const fetchAllRestaurantsError = (error) => ({
    type: FETCH_ALL_RESTAURANTS_ERROR,
    error
})

//Get all restaurants from db
export const fetchAllRestaurants = (dispatch) => ({
    //API call to GET
    // fetch(`${API_BASE_URL/restaurants}`)
})

//Add a new restaurant
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = (restaurant) => ({
   //API call to POST
   // fetch(`${API_BASE_URL/restaurants}`)
    type: ADD_RESTAURANT,
    restaurant
})

//Delete a restaurant
export const deleteRestaurant = (restaurant) => ({
   //API call to DELETE
   // fetch(`${API_BASE_URL/restaurants/:restaurantId}`)
})

//Edit a restaurant
export const editRestaurant = (restaurant) => ({
    //API call to PUT
     // fetch(`${API_BASE_URL/restaurants/:restaurantId}`)
 })


 //Actions for managing dishes

 export const FETCH_ALL_DISHES_SUCCESS = 'FETCH_ALL_DISHES_SUCCESS';
export const fetchAllDishesSuccess = (data) => ({
    type: FETCH_ALL_DISHES_SUCCESS,
    data
})
export const FETCH_ALL_DISHES_ERROR = 'FETCH_ALL_DISHES_ERROR';
export const fetchAllDishesError = (error) => ({
    type: FETCH_ALL_DISHES_ERROR,
    error
})

//Get all dishes of a restaurant from db
export const fetchAllDishes = (dispatch) => ({
    //API call to GET
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes}`)
})
//Add a new dish
export const addDish = (dish) => ({
    //API call to POST
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes}`)
 })
 
 //Delete a dish
 export const deleteDish = (dish) => ({
    //API call to DELETE
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId}`)
 })
 
 //Edit a dish
 export const editDish = (dish) => ({
     //API call to PUT
      // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId}`)
  })
 
  //Add review to a dish
  export const addDishReview = (review) => ({
    //API call to POST
     // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId/addreview}`)
 })

 //Get all reviews of a dish
 export const fetchAllReviewsOfDish = (dispatch) => ({
    //API call to GET
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId/reviews}`)
})