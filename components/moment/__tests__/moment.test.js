/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Moment from "@comp/moment/";
import moment from "moment";
import "moment/locale/tr";
Enzyme.configure({ adapter: new Adapter() });

describe("Moment Component Testing", () => {
  const formatM = moment().format(
    "D MMMM YYYY, dddd"
  );
  const wrapper = mount(
    <Moment format="D MMMM YYYY, dddd" />
  );
  test("should rendered without crashing ", () => {
    wrapper;
  });
  test("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });

  test("should throws error if propTypes are wrong", () => {
    expect(
      typeof wrapper.props().format === "string"
    );
  });

  it("should have correct props ", () => {
    expect(
      wrapper.props().format
    ).not.toBeUndefined();
    expect(wrapper.props().format).toBe(
      "D MMMM YYYY, dddd"
    );
    const finded = wrapper.find(
      "[data-test='moment-format']"
    );
    const nodes = finded.getElement();

    expect(nodes.props.children).toBe(formatM);
  });
});
