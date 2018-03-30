import React from "react";
import { Link } from "react-router-dom";
import { shallow, mount } from "enzyme";

import DishInfo from "./dish-info";

describe("<DishInfo />", () => {
  const match = {
    history: {},
    params: { restaurantId: "1" }
  };
  it("Renders without crashing", () => {
    const info = {
      id: "1",
      name: "aaa",
      latestRating: 4,
      description: "sere",
      reviewIds: []
    };
    shallow(<DishInfo {...info} match={match} />);
  });

  it("Should contain a Link", () => {
    const info = {
      id: "1",
      name: "aaa",
      latestRating: 4,
      description: "sere",
      reviewIds: []
    };
    const wrapper = shallow(<DishInfo {...info} match={match} />);
    expect(wrapper.find(Link).length).toBe(2);
  });

  it("Should fire callback on delete button click", () => {
    const callback = jest.fn();
    const info = {
      id: "1",
      name: "aaa",
      latestRating: 4,
      description: "sere",
      reviewIds: []
    };
    const wrapper = shallow(
      <DishInfo {...info} match={match} deleteDish={callback} />
    );
    wrapper.find(".delete-button").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
