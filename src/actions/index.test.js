import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "./index";
import { API_BASE_URL } from "../config";

import { setAuthToken } from "./auth";
import {
  FETCH_ALL_RESTAURANTS_SUCCESS,
  fetchAllRestaurants,
  ADD_RESTAURANT_SUCCESS,
  addRestaurant
} from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("creates FETCH_ALL_RESTAURANTS_SUCCESS when fetching restaurants has been done", () => {
    const token = "12345";
    fetchMock.getOnce(`${API_BASE_URL}/restaurants`, {
      body: { restaurants: ["sdf"] },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const expectedActions = [
      { type: FETCH_ALL_RESTAURANTS_SUCCESS, payload: { restaurants: ["sdf"] } }
    ];
    const store = mockStore({
      restaurants: { restaurants: {}, dishes: {}, reviews: {} },
      auth: { authToken: token }
    });
    return store.dispatch(actions.fetchAllRestaurants()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
