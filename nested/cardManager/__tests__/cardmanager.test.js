/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardManager from "@nest/cardManager/";
Enzyme.configure({ adapter: new Adapter() });

describe("Card Manager Component Testing", () => {
  let comp;
  let wrapper;
  beforeAll(() => {
    comp = (
      <CardManager
        dataset="cat-gundem"
        limit={5}
        vertical={false}
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
      />
    );
    wrapper = mount(comp);
  });

  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });
});
