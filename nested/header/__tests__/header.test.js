/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
Enzyme.configure({ adapter: new Adapter() });

describe("Header Component Testing", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Header
        LogoImage="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        stickyClassName="orange-bg container"
        navElements={mockData}
      />
    );
  });
  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });
  // onStateChange needs to be tested with scroll event.
  test("testing sticky header ", () => {
    debugger;
    expect(
      wrapper.children().get(0).props.activeClass
    ).toBe("active");
    expect(
      wrapper.children().get(0).props.className
    ).toBe("orange-bg container");
    expect(
      wrapper.children().get(0).props.enabled
    ).toBe(true);
    expect(
      wrapper.children().get(0).props
        .onStateChange
    ).not.toBeUndefined();
    expect(
      wrapper.children().get(0).props.shouldFreeze
    ).not.toBeUndefined();
    expect(
      wrapper.children().get(0).props
        .releasedClass
    ).toBe("released");
  });
});
