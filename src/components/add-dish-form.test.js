import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import AddDishForm from "../containers/add-dish-form";

let store = createStore(reducers);

describe("<AddDishForm />", () => {
  it("Renders without crashing", () => {
    shallow(<AddDishForm />);
  });

  it("Should fire callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <AddDishForm handleSubmit={callback} />
      </Provider>
    );
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalled();
  });

  it("Should push url to history when the cancel button is clicked", () => {
    const match = {
      history: {},
      params: { restaurantId: "2" }
    };
    const history = [];
    const wrapper = mount(
      <Provider store={store}>
        <AddDishForm history={history} match={match} />
      </Provider>
    );
    wrapper.find('button[type="button"]').simulate("click");
    expect(history.length).toBe(1);
    expect(history[0]).toBe("/restaurants/2/dishes");
  });
});
