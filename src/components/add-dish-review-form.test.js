import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import AddDishReview from "./add-dish-form";

let store = createStore(reducers);

describe("<AddDishReview />", () => {
  it("Renders without crashing", () => {
    shallow(<AddDishReview />);
  });

  it("Should fire callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <AddDishReview handleSubmit={callback} />
      </Provider>
    );
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalled();
  });

  it("Should fire callback when the cancel button is clicked", () => {
    const callback = jest.fn();
    const match = {
      history: {},
      params: { restaurantId: "2" }
    };
    const history = {
      push: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <AddDishReview onClick={callback} history={history} match={match} />
      </Provider>
    );

    wrapper.find('button[type="button"]').simulate("click");

    // expect(callback).toHaveBeenCalled()
  });
});
