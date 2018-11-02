import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import initialState from "../../store/initialState";
import Modal from "../../components/Modal";

const state = {
  ...initialState
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe("Modal component", () => {
  test("renders the Modal component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Modal />
        </Router>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
