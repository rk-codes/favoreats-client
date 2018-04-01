import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import AddRestaurantForm from "../containers/add-restaurant-form";

let store = createStore(reducers);

describe("<AddRestaurantForm />", () => {
  it("Renders without crashing", () => {
    shallow(<AddRestaurantForm />);
  });

  it("Should fire callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <AddRestaurantForm handleSubmit={callback} />
      </Provider>
    );
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalled();
  });

  it("Should fire callback when the cancel button is clicked", () => {
    const history = [];
    const wrapper = mount(
      <Provider store={store}>
        <AddRestaurantForm history={history} />
      </Provider>
    );
    wrapper.find(".cancel-button").simulate("click");
    expect(history.length).toBe(1);
    expect(history[0]).toBe("/home");
  });
});
