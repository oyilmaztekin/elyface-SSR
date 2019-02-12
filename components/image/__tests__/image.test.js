/* eslint-disable */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Image from "@comp/image/";
Enzyme.configure({ adapter: new Adapter() });

function crateSrc(size) {
  return `https://via.placeholder.com/${size}`;
}

function crateSet(size, condition) {
  const src = crateSrc(size);
  return src + " " + condition;
}

describe("Image Component Testing", () => {
  const x1 = crateSet(200, "100w");
  const x2 = crateSet(400, "500w");
  const x3 = crateSet(600, "1000w");
  const sizeSet = `${x1}, ${x2}, ${x3}`;
  const sizeCond = `(min-width: 900px) 1000px,
  (max-width: 900px) and (min-width: 400px) 50em,
  ( not (orientation: portrait) ) 300px,
  ( (orientation: landscape) or (min-width: 1000px) ) 50vw, 
  100vw">`;

  const wrapper = shallow(
    <Image
      src={crateSrc(200)}
      longdesc="Enflasyon haberi"
      desc="Enflasyon haberi"
      width="240"
      height="120"
      srcset={sizeSet}
      sizes={sizeCond}
    />
  );
  it("should rendered without crashing ", () => {
    wrapper;
  });
  it("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should throws error if propTypes are wrong", () => {});

  it("should have correct props ", () => {
    expect(wrapper.props().src).toBe(
      "https://via.placeholder.com/200"
    );
    expect(wrapper.props().srcset).toBe(
      "https://via.placeholder.com/200 100w, https://via.placeholder.com/400 500w, https://via.placeholder.com/600 1000w"
    );

    expect(wrapper.props().longdesc).toBe(
      "Enflasyon haberi"
    );

    expect(wrapper.props().desc).toBe(
      "Enflasyon haberi"
    );

    expect(wrapper.props().width).toStrictEqual(
      "240"
    );

    expect(wrapper.props().height).toStrictEqual(
      "120"
    );

    expect(wrapper.props().sizes).toStrictEqual(
      sizeCond
    );
  });
});
