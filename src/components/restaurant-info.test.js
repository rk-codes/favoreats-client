import React from "react";
import { Link } from "react-router-dom";
import { shallow, mount } from "enzyme";

import RestaurantInfo from "./restaurant-info";

describe("<RestaurantInfo />", () => {
  it("Renders without crashing", () => {
    const info = {
      id: "1",
      name: "aaa",
      cuisine: "fdfd",
      restLocation: "sere",
      dishIds: []
    };
    shallow(<RestaurantInfo {...info} />);
  });

  it("Should contain a Link", () => {
    const info = {
      id: "1",
      name: "aaa",
      cuisine: "fdfd",
      restLocation: "sere",
      dishIds: []
    };
    const wrapper = shallow(<RestaurantInfo {...info} />);
    expect(wrapper.find(Link).length).toBe(1);
  });
});
