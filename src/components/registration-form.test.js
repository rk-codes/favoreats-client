import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import RegistrationForm from "./add-dish-form";

let store = createStore(reducers);

describe("<RegistrationForm />", () => {
  it("Renders without crashing", () => {
    shallow(<RegistrationForm />);
  });

  it("Should fire callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <RegistrationForm handleSubmit={callback} />
      </Provider>
    );
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalled();
  });
});
