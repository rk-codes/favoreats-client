import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import AddRestaurantForm from "./add-restaurant-form";

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
    const callback = jest.fn();
    const push = jest.fn();
    const history = [];
    const wrapper = mount(
      <Provider store={store}>
        <AddRestaurantForm onClick={callback} history={history} />
      </Provider>
    );
    wrapper.find('button[type="button"]').simulate("click");
    // expect(callback).toHaveBeenCalled()
  });
});
