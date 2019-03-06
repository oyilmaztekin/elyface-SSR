/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Lists from "@comp/lists/";
import mockData from "@mock/cardMock.json";
Enzyme.configure({ adapter: new Adapter() });

describe("Lists Component Testing", () => {
  let wrapper;
  beforeAll(async () => {
    wrapper = mount(
      <Lists
        registry={mockData}
        bg="#ffffff"
        className="list-link seo-haberleri"
        linkClassName="link-footer-category"
        vertical={false}
        tagType="section"
        limit={5}
      />
    );
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
    expect(wrapper.props().bg).toBe("#ffffff");
    expect(wrapper.props().className).toBe(
      "list-link seo-haberleri"
    );
    expect(wrapper.props().linkClassName).toBe(
      "link-footer-category"
    );
    expect(wrapper.props().vertical).toBe(false);
  });
  test("testing flex direction after vertical props", () => {
    wrapper.setProps({ vertical: true });
    expect(wrapper.props().vertical).toBe(true);
    const listWrapper = wrapper.find(
      ".list-link"
    );
    expect(
      listWrapper.get(1).props.style.flexDirection
    ).toBe("column");
  });
});
