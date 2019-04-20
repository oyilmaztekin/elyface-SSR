/* eslint-disable */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import { headerHtml } from "@mock/headerhtml.js";
Enzyme.configure({ adapter: new Adapter() });

describe("Header Component Testing", () => {
  let wrapper = shallow(
    <Header
      LogoImage="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
      stickyClassName="orange-bg container"
      navElements={mockData}
      activeClass="sticky-now"
      releasedClass="released"
    />
  );
  const rendered = wrapper.render();

  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });
  // onStateChange needs to be tested with scroll event. (activeClass, releaseClass)
  test("testing sticky header ", () => {
    // expect(
    //   wrapper.children().get(0).props.activeClass
    // ).toBe("sticky-now");
    expect(
      rendered["0"].attribs.class
    ).toContain("orange-bg container");

    expect(wrapper.html()).toEqual(headerHtml)
    // expect(
    //   wrapper.children().get(0).props
    //     .releasedClass
    // ).toBe("released");
  });
});
