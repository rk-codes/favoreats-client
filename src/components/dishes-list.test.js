import React from "react";
import { shallow, mount } from "enzyme";

import DishesList from "./dishes-list";
import DishInfo from "./dish-info";

describe("<DishesList />", () => {
  const match = {
    history: {},
    params: { restaurantId: "1" }
  };
  it("Renders without crashing", () => {
    shallow(
      <DishesList
        fetchAllDishes={() => {}}
        restaurants={{}}
        dishes={{}}
        match={match}
      />
    );
  });

  it("Should fire fetchAllDishes on mount", () => {
    const dispatch = jest.fn();
    const wrapper = mount(
      <DishesList
        fetchAllDishes={dispatch}
        restaurants={{}}
        dishes={{}}
        match={match}
      />
    );
    expect(dispatch).toHaveBeenCalled();
  });

  it("Should render the h3", () => {
    const dispatch = jest.fn();
    const restaurants = {
      1: {
        id: "1",
        name: "aaa",
        cuisine: "fdfd",
        restLocation: "sere",
        dishIds: []
      }
    };

    const wrapper = shallow(
      <DishesList
        fetchAllDishes={dispatch}
        restaurants={{ ...restaurants }}
        dishes={{}}
        match={match}
      />
    );
    expect(wrapper.contains(<h3>Restaurant: aaa</h3>)).toEqual(true);
  });

  it("Should render the dishes list", () => {
    const dispatch = jest.fn();
    const restaurants = {
      1: {
        id: "1",
        name: "aaa",
        cuisine: "fdfd",
        restLocation: "sere",
        dishIds: ["11"]
      }
    };
    const wrapper = shallow(
      <DishesList
        fetchAllDishes={dispatch}
        restaurants={{ ...restaurants }}
        dishes={{}}
        match={match}
      />
    );
    const lists = wrapper.find("ul li");
    expect(lists.length).toEqual(1);
  });
});
