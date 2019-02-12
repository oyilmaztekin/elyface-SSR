/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "@comp/logo/";
Enzyme.configure({ adapter: new Adapter() });

describe("Image Component Testing", () => {
  const wrapper = mount(
    <Logo
      src="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
      title="Haberi yakala logosu"
      alt="Haberi yakala logosu"
      responsive
      className="optional-classname"
    />
  );
  it("should rendered without crashing ", () => {
    wrapper;
  });
  it("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should throws error if propTypes are wrong", () => {
    expect(
      typeof wrapper.props().responsive ===
        "boolean"
    );
  });

  it("should have correct props ", () => {
    expect(wrapper.props().src).toBe(
      "http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
    );
    expect(wrapper.props().title).toBe(
      "Haberi yakala logosu"
    );

    expect(wrapper.props().alt).toBe(
      "Haberi yakala logosu"
    );

    expect(wrapper.props().responsive).toBe(true);

    expect(
      wrapper.props().className
    ).toStrictEqual("optional-classname");
  });
});
