import React from "react";
import { shallow, mount } from "enzyme";

import { MemoryRouter as Router } from "react-router-dom";
import DishReviewsList from "./dish-reviews-list";
import DishReview from "./dish-review";

describe("<DishReviewsList />", () => {
  const match = {
    history: {},
    params: { restaurantId: "1", dishId: "11" }
  };
  it("Renders without crashing", () => {
    shallow(
      <DishReviewsList
        fetchAllReviewsOfDish={() => {}}
        restaurants={{}}
        dishes={{}}
        reviews={{}}
        match={match}
      />
    );
  });

  it("Should fire fetchAllReviewsOfDish on mount", () => {
    const dispatch = jest.fn();
    const wrapper = mount(
      <Router>
        <DishReviewsList
          fetchAllReviewsOfDish={dispatch}
          restaurants={{}}
          dishes={{}}
          reviews={{}}
          match={match}
        />
      </Router>
    );
    expect(dispatch).toHaveBeenCalled();
  });

  it("Should render the reviews list", () => {
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
    const dishes = {
      11: {
        id: "11",
        name: "ssr",
        reviewIds: ["111"]
      }
    };
    const wrapper = shallow(
      <DishReviewsList
        fetchAllReviewsOfDish={dispatch}
        restaurants={{ ...restaurants }}
        dishes={{ ...dishes }}
        reviews={{}}
        match={match}
      />
    );
    const lists = wrapper.find("ul li");
    expect(lists.length).toEqual(1);
  });
});
