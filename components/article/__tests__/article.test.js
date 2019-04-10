/* eslint-disable */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Article from "@comp/article/";
Enzyme.configure({ adapter: new Adapter() });



describe("Article Component Testing", () => {
  const wrapper = shallow(
    <Article
    />
  );
  it("should rendered without crashing ", () => {
    wrapper;
  });
  it("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
});
