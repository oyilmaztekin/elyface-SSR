/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cards from "@comp/cards/";
import mockData from "@mock/cardMock.json";
Enzyme.configure({ adapter: new Adapter() });

describe("Lists Component Testing", () => {
  let comp;
  let wrapper;
  let spy;
  beforeAll(async () => {
    comp = (
      <Cards
        registry={mockData}
        limit={5}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        height={320}
        lineHeight="24"
        className="cardClassName"
      />
    );

    wrapper = mount(comp);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });

  test("testing given props", () => {
    expect(wrapper.props().registry).toBe(
      mockData
    );
    expect(wrapper.props().limit).toBe(5);
    expect(wrapper.props().containerBG).toBe(
      "#ffffff"
    );
    expect(wrapper.props().className).toBe(
      "cardClassName"
    );
    expect(wrapper.props().imgClassName).toBe(
      "className"
    );
    expect(wrapper.props().cardBg).toBe("#fff");
    expect(wrapper.props().textColor).toBe(
      "#323232"
    );
    expect(wrapper.props().fontSize).toBe("18");
    expect(wrapper.props().gallery).toBe(false);
    expect(wrapper.props().border).toBe(
      "#ffa200"
    );
    expect(wrapper.props().width).toBe(400);
    expect(wrapper.props().height).toBe(320);
    expect(wrapper.props().lineHeight).toBe("24");
  });
  test("testing flex direction true", () => {
    wrapper.setProps({ vertical: true });
    const listWrapper = wrapper.find(
      ".card-lists"
    );
    expect(wrapper.props().vertical).toBe(true);
    expect(listWrapper.props().className).toBe(
      "card-lists card-lists-vertical"
    );
  });
});
