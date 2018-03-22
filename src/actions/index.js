import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_ALL_RESTAURANTS_SUCCESS = "FETCH_ALL_RESTAURANTS_SUCCESS";
export const fetchAllRestaurantsSuccess = data => ({
  type: FETCH_ALL_RESTAURANTS_SUCCESS,
  payload: data
});
export const FETCH_ALL_RESTAURANTS_ERROR = "FETCH_ALL_RESTAURANTS_ERROR";
export const fetchAllRestaurantsError = error => ({
  type: FETCH_ALL_RESTAURANTS_ERROR,
  payload: error
});

//Get all restaurants from db
export const fetchAllRestaurants = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  //API call to GET all restaurants
  return fetch(`${API_BASE_URL}/restaurants`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchAllRestaurantsSuccess(data)))
    .catch(err => {
      dispatch(fetchAllRestaurantsError(err));
    });
};

//Add a new restaurant
export const ADD_RESTAURANT_SUCCESS = "ADD_RESTAURANT_SUCCESS";
export const addRestaurantSuccess = data => ({
  type: ADD_RESTAURANT_SUCCESS,
  payload: data
});
export const ADD_RESTAURANT_ERROR = "ADD_RESTAURANT_ERROR";
export const addRestaurantError = error => ({
  type: ADD_RESTAURANT_ERROR,
  payload: error
});
export const addRestaurant = restaurantData => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(restaurantData);

  //API call to POST
  return fetch(`${API_BASE_URL}/restaurants`, {
    method: "POST",
    body: JSON.stringify(restaurantData),
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(addRestaurantSuccess(data)))
    .catch(err => {
      dispatch(addRestaurantError(err));
    });
};

//Delete a restaurant
export const DELETE_RESTAURANT_SUCCESS = "DELETE_RESTAURANT_SUCCESS";
export const deleteRestaurantSuccess = data => ({
  type: DELETE_RESTAURANT_SUCCESS,
  payload: data
});
export const DELETE_RESTAURANT_ERROR = "DELETE_RESTAURANT_ERROR";
export const deleteRestaurantError = error => ({
  type: DELETE_RESTAURANT_ERROR,
  payload: error
});
export const deleteRestaurant = restaurantId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  //API call to DELETE
  return fetch(`${API_BASE_URL}/restaurants/${restaurantId}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(deleteRestaurantSuccess(data)))
    .catch(err => {
      dispatch(deleteRestaurantError(err));
    });
};

//Edit a restaurant
export const EDIT_RESTAURANT_SUCCESS = "EDIT_RESTAURANT_SUCCESS";
export const editRestaurantSuccess = data => ({
  type: EDIT_RESTAURANT_SUCCESS,
  payload: data
});
export const EDIT_RESTAURANT_ERROR = "EDIT_RESTAURANT_ERROR";
export const editRestaurantError = error => ({
  type: EDIT_RESTAURANT_ERROR,
  payload: error
});
export const editRestaurant = (data, restaurantId) => (dispatch, getState) => {
  //API call to PUT
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/restaurants/${restaurantId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(editRestaurantSuccess(data)))
    .catch(err => {
      dispatch(editRestaurantError(err));
    });
};

//Actions for managing dishes

export const FETCH_ALL_DISHES_SUCCESS = "FETCH_ALL_DISHES_SUCCESS";
export const fetchAllDishesSuccess = dishes => ({
  type: FETCH_ALL_DISHES_SUCCESS,
  payload: dishes
});
export const FETCH_ALL_DISHES_ERROR = "FETCH_ALL_DISHES_ERROR";
export const fetchAllDishesError = error => ({
  type: FETCH_ALL_DISHES_ERROR,
  error
});

//Get all dishes of a restaurant from db
export const fetchAllDishes = restaurantId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  //API call to GET all dishes
  return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/dishes`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchAllDishesSuccess(data)))
    .catch(err => {
      dispatch(fetchAllDishesError(err));
    });
};

//Add a new dish
export const ADD_DISH_SUCCESS = "ADD_DISH_SUCCESS";
export const addDishSuccess = data => ({
  type: ADD_DISH_SUCCESS,
  payload: data
});
export const ADD_DISH_ERROR = "ADD_DISH_ERROR";
export const addDishError = error => ({
  type: ADD_DISH_ERROR,
  payload: error
});
export const addDish = (restaurantId, dishData) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  //API call to POST
  return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/dishes`, {
    method: "POST",
    body: JSON.stringify(dishData),
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(addDishSuccess(data)))
    .catch(err => {
      dispatch(addDishError(err));
    });
};

//Delete a dish
export const DELETE_DISH_SUCCESS = "DELETE_DISH_SUCCESS";
export const deleteDishSuccess = data => ({
  type: DELETE_DISH_SUCCESS,
  payload: data
});
export const DELETE_DISH_ERROR = "DELETE_DISH_ERROR";
export const deleteDishError = error => ({
  type: DELETE_DISH_ERROR,
  payload: error
});
export const deleteDish = (restaurantId, dishId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  //API call to DELETE
  return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/dishes/${dishId}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(deleteDishSuccess(data)))
    .catch(err => {
      dispatch(deleteDishError(err));
    });
};

//Edit a dish
export const EDIT_DISH_SUCCESS = "EDIT_DISH_SUCCESS";
export const editDishSuccess = data => ({
  type: EDIT_DISH_SUCCESS,
  payload: data
});
export const EDIT_DISH_ERROR = "EDIT_DISH_ERROR";
export const editDishError = error => ({
  type: EDIT_DISH_ERROR,
  payload: error
});
export const editDish = () => dispatch => {
  //API call to PUT
  // fetch(`${API_BASE_URL/restaurants/:restaurantId/dishes/:dishId}`)
  const dish = {
    dishId: "3",
    name: "aab",
    rating: "3"
  };
  setTimeout(() => {
    console.log("success");
    dispatch(editDishSuccess(dish));
  }, 300);
};

//Add review to a dish
export const ADD_DISH_REVIEW_SUCCESS = "ADD_DISH_REVIEW_SUCCESS";
export const addDishReviewSuccess = data => ({
  type: ADD_DISH_REVIEW_SUCCESS,
  payload: data
});
export const ADD_DISH_REVIEW_ERROR = "ADD_DISH_REVIEW_ERROR";
export const addDishReviewError = error => ({
  type: ADD_DISH_REVIEW_ERROR,
  payload: error
});
export const addDishReview = (restaurantId, dishId, reviewData) => (
  dispatch,
  getState
) => {
  //API call to POST
  const authToken = getState().auth.authToken;
  return fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/dishes/${dishId}/reviews`,
    {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`,
        "content-type": "application/json"
      }
    }
  )
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data =>
      dispatch(addDishReviewSuccess(Object.assign({}, data, { dishId })))
    )
    .catch(err => {
      console.log(err);
      dispatch(addDishReviewError(err));
    });
};

//Get all reviews of a dish
export const FETCH_ALL_REVIEWS_SUCCESS = "FETCH_ALL_REVIEWS_SUCCESS";
export const fetchAllReviewsSuccess = reviews => ({
  type: FETCH_ALL_REVIEWS_SUCCESS,
  payload: reviews
});
export const FETCH_ALL_REVIEWS_ERROR = "FETCH_ALL_REVIEWS_ERROR";
export const fetchAllReviewsError = error => ({
  type: FETCH_ALL_REVIEWS_ERROR,
  error
});
export const fetchAllReviewsOfDish = (restaurantId, dishId) => (
  dispatch,
  getState
) => {
  const authToken = getState().auth.authToken;

  //API call to GET all reviews
  return fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/dishes/${dishId}/reviews`,
    {
      method: "GET",
      headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
      }
    }
  )
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchAllReviewsSuccess(data)))
    .catch(err => {
      dispatch(fetchAllReviewsError(err));
    });
};
