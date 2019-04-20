/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Icon from "@comp/icon/";
Enzyme.configure({ adapter: new Adapter() });

describe("Testing Icon Component...", () => {
  const wrapper = mount(<Icon icon="video"/>);
  it("should rendered without crashing ", () => {
    wrapper;
  });
  
  it("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  
  it("should have correct props", () => {
    // dangerouslySetInnerHTML must be tested
    // wrapper.instance().componentDidMount();
    expect(wrapper.props().icon).toBe("video");
  });
});
