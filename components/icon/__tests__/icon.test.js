/* eslint-disable */
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Icon from "@comp/icon/";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
Enzyme.configure({ adapter: new Adapter() });

describe("Icon Component Testing", () => {
  const wrapper = mount(
    <Icon icon={faCoffee} size="24" />
  );
  test("should rendered without crashing ", () => {
    wrapper;
  });
  test("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  test("should throws error if propTypes are wrong", () => {
    expect(
      typeof wrapper.props().icon === "objeft"
    );
  });

  it("should have correct props ", () => {
    expect(wrapper.props().icon).toBe(faCoffee);
    expect(wrapper.props().size).toBe("24");
  });
});
