export const FETCH_ALL_RESTAURANTS_SUCCESS = 'FETCH_ALL_RESTAURANTS_SUCCESS';
export const fetchAllRestaurantsSuccess = (data) => ({
    type: FETCH_ALL_RESTAURANTS_SUCCESS,
    payload: data
})
export const FETCH_ALL_RESTAURANTS_ERROR = 'FETCH_ALL_RESTAURANTS_ERROR';
export const fetchAllRestaurantsError = (error) => ({
    type: FETCH_ALL_RESTAURANTS_ERROR,
    payload: error
})

//Get all restaurants from db
export const fetchAllRestaurants = () => dispatch => {
    console.log("fetach all");
     //API call to GET
    // fetch(`${API_BASE_URL/restaurants}`)
    const restaurants =  [{
        id: 1,
        name: 'ABC',
        location: 'San Francisco',
        cuisine: 'Italian',
        dishes: [{
            id: 11,
            name: 'Xyz',
            reviews: [{
                id: 111,
                rating: 3,
                description: 'sgdgdh'
            },{
                id: 112,
                rating: 5,
                description: 'gjhgk'
            }]
        },
        {
            id: 33,
            name: 'ddd',
            reviews: [{
                id: 333,
                rating: 4,
                description: 'sfg'
            }]
        }]   
    },
    {
        id: 2,
        name: 'BCD',
        location: 'Las Vegas',
        cuisine: 'Mexican',
        dishes: [{
            id: 22,
            name: 'Bcd',
           reviews: []
        },
        {
            id: 44,
            name: 'ghghf',
            reviews: []
        
         }]
    }]
    setTimeout(() => { 
        console.log("success");
        dispatch(fetchAllRestaurantsSuccess(restaurants))
    }, 300);
}
   
//Add a new restaurant
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const addRestaurantSuccess = (data) => ({
    type: ADD_RESTAURANT_SUCCESS,
    payload: data
})
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';
export const addRestaurantError = (error) => ({
    type: ADD_RESTAURANT_ERROR,
    payload: error
})
export const addRestaurant = (restaurant) => (dispatch) => {
   //API call to POST
   // fetch(`${API_BASE_URL/restaurants}`)
   const restaurant =  {
       id: 4,
       name: 'DFF',
       location: 'San Francisco',
       cuisine: 'Indian',
       dishes: []
    }
    setTimeout(() => { 
        console.log("success");
        dispatch(addRestaurantSuccess(restaurant))
    }, 300);
}

//Delete a restaurant
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const deleteRestaurantSuccess = (data) => ({
    type: DELETE_RESTAURANT_SUCCESS,
    payload: data
})
export const DELETE_RESTAURANT_ERROR = 'DELETE_RESTAURANT_ERROR';
export const deleteRestaurantError = (error) => ({
    type: DELETE_RESTAURANT_ERROR,
    payload: error
})
export const deleteRestaurant = (item) => (dispatch) => {
   //API call to DELETE
   // fetch(`${API_BASE_URL/restaurants/:restaurantId}`)
   const restaurant =  {
       id: 2,
       name: 'BCD',
       location: 'Las Vegas',
       cuisine: 'Mexican',
       dishCount: '1',
       dishes: [{
           dishId: 22,
           name: 'Bcd',
           reviews: []
        }]
    }

    setTimeout(() => { 
        console.log("success");
        dispatch(deleteRestaurantSuccess(restaurant))
    }, 300);
}

//Edit a restaurant
export const EDIT_RESTAURANT_SUCCESS = 'EDIT_RESTAURANT_SUCCESS';
export const editRestaurantSuccess = (data) => ({
    type: EDIT_RESTAURANT_SUCCESS,
    payload: data
})
export const EDIT_RESTAURANT_ERROR = 'EDIT_RESTAURANT_ERROR';
export const editRestaurantError = (error) => ({
    type: EDIT_RESTAURANT_ERROR,
    payload: error
})
export const editRestaurant = () => (dispatch) => {
    //API call to PUT
     // fetch(`${API_BASE_URL/restaurants/:restaurantId}`)
     const restaurants =  [{
        id: '1',
        name: 'XYY Edited',
        location: 'San Francisco',
        cuisine: 'Indian',
        dishCount: '0',
        dishes:[]
    },
    {
        id: '2',
        name: 'BCD',
        location: 'Las Vegas',
        cuisine: 'Mexican',
        dishCount: '1',
        dishes: [{
            dishId: '2',
            name: 'Bcd',
            rating: '5'
        }]
    }]

    setTimeout(() => { 
        console.log("success");
        dispatch(editRestaurantSuccess(restaurants))
    }, 300);
 }


 //Actions for managing dishes

export const FETCH_ALL_DISHES_SUCCESS = 'FETCH_ALL_DISHES_SUCCESS';
export const fetchAllDishesSuccess = (dishes) => ({
    type: FETCH_ALL_DISHES_SUCCESS,
    payload: dishes
})
export const FETCH_ALL_DISHES_ERROR = 'FETCH_ALL_DISHES_ERROR';
export const fetchAllDishesError = (error) => ({
    type: FETCH_ALL_DISHES_ERROR,
    error
})

//Get all dishes of a restaurant from db
export const fetchAllDishes = (restaurantId) => dispatch =>{
    //API call to GET
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes}`)
    console.log("fetch all dishes");
   
    const dishes = [
        {
        restId: 1,
        id: 11,
        name: 'Xyz',
        reviews: [{
            id: 111,
            rating: 3,
            description: 'sgdgdh'
        },{
            id: 112,
            rating: 5,
            description: 'gjhgk'
        }]     
    },
    {
        restId: 1,
        id: 33,
        name: 'ddd',
        reviews: [{
            id: 333,
            rating: 4,
            description: 'sfg'
        }]    
    }]
        
    setTimeout(() => { 
        console.log("success");
        dispatch(fetchAllDishesSuccess(dishes))
    }, 300);
}

//Add a new dish
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const addDishSuccess = (data) => ({
    type: ADD_DISH_SUCCESS,
    payload: data
})
export const ADD_DISH_ERROR = 'ADD_DISH_ERROR';
export const addDishError = (error) => ({
    type: ADD_DISH_ERROR,
    payload: error
})
export const addDish = (dishInput) => (dispatch) => {
    //API call to POST
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes}`)
    console.log(dishInput);
       const dish = {
            restId: 1,
            id: 55,
            name: dishInput.name,
            reviews: [{
                id: 555,
                rating: dishInput.rating,
                description: dishInput.review
            }]
        }
   
    setTimeout(() => { 
        console.log("success");
        dispatch(addDishSuccess(dish))
    }, 300);

 }
 
 //Delete a dish
export const DELETE_DISH_SUCCESS = 'DELETE_DISH_SUCCESS';
export const deleteDishSuccess = (data) => ({
    type: DELETE_DISH_SUCCESS,
    payload: data
})
export const DELETE_DISH_ERROR = 'DELETE_DISH_ERROR';
export const deleteDishError = (error) => ({
    type: DELETE_DISH_ERROR,
    payload: error
})
 export const deleteDish = () => (dispatch) => {
    //API call to DELETE
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId}`)
    const dish = {
        restId: 1,
        id: 11,
        name: 'Bcd',
        reviews: [{
            id: 111,
            rating: '3',
            description: 'sfsg'
        }]
    }
    setTimeout(() => { 
        console.log("success");
        dispatch(deleteDishSuccess(dish))
    }, 300);
 }
 
 //Edit a dish
 export const EDIT_DISH_SUCCESS = 'EDIT_DISH_SUCCESS';
 export const editDishSuccess = (data) => ({
     type: EDIT_DISH_SUCCESS,
     payload: data
 })
 export const EDIT_DISH_ERROR = 'EDIT_DISH_ERROR';
 export const editDishError = (error) => ({
     type: EDIT_DISH_ERROR,
     payload: error
 })
 export const editDish = () => (dispatch) => {
     //API call to PUT
      // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId}`)
      const dish = {
        dishId: '3',
        name: 'aab',
        rating: '3'
    }
    setTimeout(() => { 
        console.log("success");
        dispatch(editDishSuccess(dish))
    }, 300);
  }
 
  //Add review to a dish
  export const ADD_DISH_REVIEW_SUCCESS = 'ADD_DISH_REVIEW_SUCCESS';
  export const addDishReviewSuccess = (data) => ({
      type: ADD_DISH_REVIEW_SUCCESS,
      payload: data
  })
  export const ADD_DISH_REVIEW_ERROR = 'ADD_DISH_REVIEW_ERROR';
  export const addDishReviewError = (error) => ({
      type: ADD_DISH_REVIEW_ERROR,
      payload: error
  })
  export const addDishReview = () => (dispatch) => {
    //API call to POST
     // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId/addreview}`)
     const review = {
         dishId: 22,
         id: 555, 
         date: '4/5/2017',
         rating: '3',
         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
    setTimeout(() => { 
        console.log("success");
        dispatch(addDishReviewSuccess(review))
    }, 300);

 }

 //Get all reviews of a dish
 export const FETCH_ALL_REVIEWS_SUCCESS = 'FETCH_ALL_REVIEWS_SUCCESS';
export const fetchAllReviewsSuccess = (reviews) => ({
    type: FETCH_ALL_REVIEWS_SUCCESS,
    payload: reviews
})
export const FETCH_ALL_REVIEWS_ERROR = 'FETCH_ALL_REVIEWS_ERROR';
export const fetchAllReviewsError = (error) => ({
    type: FETCH_ALL_REVIEWS_ERROR,
    error
})
 export const fetchAllReviewsOfDish = () => (dispatch) => {
    //API call to GET
    // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId/reviews}`)
    const reviews=[{
        date: '4/5/2017',
        rating: '3',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        date: '5/6/2017',
        rating: '4',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
    setTimeout(() => { 
        console.log("success");
        dispatch(fetchAllReviewsSuccess(reviews))
    }, 300);
}