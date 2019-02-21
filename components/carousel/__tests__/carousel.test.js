/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Carousel from "@comp/carousel/";
import mockData from "@mock/carouselMocks.json";
Enzyme.configure({ adapter: new Adapter() });

function mouseEnterProps(e) {
  console.log();
}

const comp = (
  <Carousel
    width="600"
    layout="bottom"
    slides={mockData}
    onMouseEnter={e => mouseEnterProps(e)}
  />
);
describe("Carousel Component Testing", () => {
  const wrapper = mount(comp);
  test("should rendered without crashing ", () => {
    wrapper;
  });
});
