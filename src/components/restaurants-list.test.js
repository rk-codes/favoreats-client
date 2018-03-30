import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import RestaurantsList from "./restaurants-list";
import RestaurantInfo from "./restaurant-info";

import { MemoryRouter as Router, withRouter } from "react-router-dom";

let store = createStore(reducers);

describe("<RestaurantsList />", () => {
  it("Renders without crashing", () => {
    shallow(
      <RestaurantsList fetchAllRestaurants={() => {}} restaurants={{}} />
    );
  });

  it("Should fire fetchAllRestaurants on mount", () => {
    const dispatch = jest.fn();
    const wrapper = mount(
      <RestaurantsList fetchAllRestaurants={dispatch} restaurants={{}} />
    );
    expect(dispatch).toHaveBeenCalled();
  });

  it("Should render the h1", () => {
    const dispatch = jest.fn();
    const rests = {
      id: {
        id: "1",
        name: "aaa",
        cuisine: "fdfd",
        restLocation: "sere",
        dishIds: []
      }
    };

    const wrapper = shallow(
      <RestaurantsList restaurants={rests} fetchAllRestaurants={dispatch} />
    );
    expect(wrapper.contains(<h1>My Restaurants</h1>)).toEqual(true);
  });

  it("Should render the restaurants list", () => {
    const dispatch = jest.fn();
    const rests = {
      1: {
        id: "1",
        name: "aaa",
        cuisine: "fdfd",
        restLocation: "sere",
        dishIds: []
      },
      2: {
        id: "2",
        name: "rty",
        cuisine: "zsds",
        restLocation: "jkhj",
        dishIds: []
      }
    };
    const wrapper = shallow(
      <RestaurantsList restaurants={rests} fetchAllRestaurants={dispatch} />
    );
    const lists = wrapper.find("ul li");
    expect(lists.length).toEqual(2);
  });
});
