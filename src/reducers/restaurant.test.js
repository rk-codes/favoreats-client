import restaurantReducer from "./restaurant";
import * as actions from "../actions";

describe("restaurantReducer", () => {
  const initialState = {
    restaurants: {},
    dishes: {},
    reviews: {}
  };
  const restaurant1 = {
    id: "1",
    name: "aaa",
    cuisine: "bbb",
    location: "ccc",
    dishIds: []
  };
  const restaurant2 = {
    id: "2",
    name: "tyt",
    cuisine: "bbgfjgjb",
    location: "czsfscc",
    dishIds: []
  };
  it("Should set the initial state when nothing is passed in", () => {
    const state = restaurantReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      ...initialState
    });
  });
  it("Should add new restaurant", () => {
    let state;
    state = restaurantReducer(state, {
      type: actions.ADD_RESTAURANT_SUCCESS,
      payload: restaurant1
    });
    expect(state).toEqual({
      restaurants: {
        1: {
          id: "1",
          name: "aaa",
          cuisine: "bbb",
          restLocation: "ccc",
          dishIds: []
        }
      },
      dishes: {},
      reviews: {}
    });
  });
  it("Should fetch all restaurants", () => {
    let state;
    state = restaurantReducer(state, {
      type: actions.FETCH_ALL_RESTAURANTS_SUCCESS,
      payload: [restaurant1, restaurant2]
    });
    expect(state).toEqual({
      restaurants: {
        1: {
          id: "1",
          name: "aaa",
          cuisine: "bbb",
          restLocation: "ccc",
          dishIds: []
        },
        2: {
          id: "2",
          name: "tyt",
          cuisine: "bbgfjgjb",
          restLocation: "czsfscc",
          dishIds: []
        }
      },
      dishes: {},
      reviews: {}
    });
  });
  it("Should delete a restaurant", () => {
    let state = {
      restaurants: {
        1: {
          id: "1",
          name: "aaa",
          cuisine: "bbb",
          restLocation: "ccc",
          dishIds: []
        },
        2: {
          id: "2",
          name: "tyt",
          cuisine: "bbgfjgjb",
          restLocation: "czsfscc",
          dishIds: []
        }
      },
      dishes: {},
      reviews: {}
    };

    state = restaurantReducer(state, {
      type: actions.DELETE_RESTAURANT_SUCCESS,
      payload: restaurant1
    });
    expect(state).toEqual({
      restaurants: {
        2: {
          id: "2",
          name: "tyt",
          cuisine: "bbgfjgjb",
          restLocation: "czsfscc",
          dishIds: []
        }
      },
      dishes: {},
      reviews: {}
    });
  });
});
