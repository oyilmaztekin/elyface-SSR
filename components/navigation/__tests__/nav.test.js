/* eslint-disable */
import React from "react";
import Navigation from "@comp/navigation/";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import mockData from "@mock/menuMocks.json";

//what will be tested
/**
 * @prop {navElements} - array
 */

function compareEachElement(arr1, arr2) {
  let countclass = 0;
  let countclassforli = 0;
  let passhref = 0;
  let counthref = 0;
  let counttext = 0;
  if (!!arr1 && !!arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let el1 = arr1[i];

      el1.props.className === "nav-item"
        ? ++countclass
        : null; // must be

      el1.props.children.props.children.props
        .className === "link-nav"
        ? ++countclassforli //must be 20
        : null;
      el1.props.children.props.passHref === true
        ? ++passhref
        : null; // must be 10

      for (let k = 0; k < arr2.length; k++) {
        let el2 = arr2[k];

        el1.props.children.props.href === el2.href
          ? ++counthref
          : null; // must be 10
        el1.props.children.props.children.props
          .text === el2.key
          ? ++counttext // must be 10
          : null;
      }
    }
    return {
      comparedLength: arr2.length === arr1.length,
      countclass: countclass, // must be 10
      countclassforli: countclassforli,
      counthref: counthref,
      passhref: passhref,
      counttext: counttext //must be 10
    };
  } else {
    throw new Error(
      "empty, one of them array is empty"
    );
  }
}

describe("Navigation Component Testing", () => {
  let wrapper;
  let props;
  let ulProps;
  beforeAll(() => {
    wrapper = mount(
      <Navigation navElements={mockData} />
    );
    props = wrapper.getElement().props;
    ulProps = wrapper.find(".nav").get(0).props;
  });
  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });

  test("testing navElements", () => {
    expect(typeof props.navElements).toBe(
      "object"
    );
    expect(props.navElements.length).toEqual(10);
  });
  test("testing ul props", () => {
    expect(ulProps.children.length).toEqual(10);
    expect(ulProps.className).toBe("nav");
  });

  test("testing li classNames and values", () => {
    const compared = compareEachElement(
      ulProps.children,
      props.navElements
    );

    expect(compared.countclass).toEqual(10);
    expect(compared.countclassforli).toEqual(10);
    expect(compared.counthref).toEqual(10);
    expect(compared.counttext).toEqual(10);
    expect(compared.comparedLength).toBe(true);
    expect(compared.passhref).toEqual(10);
  });
});
