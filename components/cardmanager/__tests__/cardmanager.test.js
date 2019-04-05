/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardManager from "@comp/cardmanager/";
Enzyme.configure({ adapter: new Adapter() });

describe("Cardmanager errors", () => {
  let comp;
  let wrapper;
  let spy;
  beforeAll(async () => {
    comp = <CardManager dataset="cat-gundem" />;
    wrapper = mount(comp);
  });

  afterAll(() => {
    wrapper.unmount();
  });
  test("testing errors - componentDidMount", async () => {
    const wrapper = mount(
      <CardManager dataset="asdasd" />
    );

    await wrapper.instance().componentDidMount();
    expect(
      wrapper
        .state()
        .cardRegistry.hasOwnProperty("error")
    ).toBe(true);
  });
});
