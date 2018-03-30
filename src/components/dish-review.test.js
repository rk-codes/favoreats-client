import React from "react";
import { shallow } from "enzyme";

import DishReview from "./dish-review";

describe("<DishReview />", () => {
  it("Renders without crashing", () => {
    shallow(<DishReview />);
  });
});
