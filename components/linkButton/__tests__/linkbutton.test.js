/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LinkButton from "@comp/linkbutton/";
import Link from "next/link";
Enzyme.configure({ adapter: new Adapter() });

describe("LinkButton Component Testing", () => {
  let wrapper;
  let linkbutton;
  let mockMouseEnter;
  let mockMouseLeave;

  beforeAll(() => {
    mockMouseEnter = jest.fn(e => {
      wrapper.setState({
        value: e.target,
        hovered: true
      });
      return e.target;
    });
    mockMouseLeave = jest.fn(e => {
      wrapper.setState({
        value: null,
        hovered: false
      });
      return e.target;
    });
    wrapper = mount(
      <Link passHref href="#deneme">
        <LinkButton
          text="Deneme Title"
          data-test="test"
          onMouseEnter={mockMouseEnter}
          onMouseLeave={mockMouseLeave}
        >
          <span>Sample Link</span>
        </LinkButton>
      </Link>
    );
    linkbutton = wrapper.find(
      '[data-test="test"]'
    );
  });
  //insert props for classNAme="link-nav"
  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });
  test("testing Nexts Link props ", () => {
    expect(wrapper.props().href).toBe("#deneme");
    expect(wrapper.props().passHref).toBe(true);
  });
  test("testing LinkButton Props", () => {
    expect(linkbutton.get(0).type.name).toBe(
      "LinkButton"
    );
    expect(linkbutton.get(0).props.href).toBe(
      "#deneme"
    );
    expect(linkbutton.get(0).props.text).toBe(
      "Deneme Title"
    );
    expect(linkbutton.children()).toHaveLength(2);
  });

  test("testing LinkButton attributes on the DOM", () => {
    const anchorLink = linkbutton.hostNodes();
    expect(
      anchorLink.props().onClick
    ).not.toBeUndefined();

    expect(anchorLink.props().alt).toBe(
      "Deneme Title"
    );
    expect(anchorLink.props().title).toBe(
      "Deneme Title"
    );
    expect(anchorLink.props().target).toBe(
      "_self"
    );
    expect(anchorLink.props().href).toBe(
      "#deneme"
    );
    expect(
      anchorLink.props().className
    ).toBeUndefined();
  });

  test("testing onMouseEnter and onMouseLeave props with mock function", () => {
    const anchorLink = linkbutton.hostNodes();
    expect(
      anchorLink.props().onMouseEnter
    ).not.toBeUndefined();

    linkbutton.find("a").simulate("mouseenter");
    expect(
      wrapper.children().props().onMouseEnter
    ).toBeTruthy();

    expect(
      linkbutton.get(0).props.onMouseEnter.name
    ).toBe("mockConstructor");

    expect(
      mockMouseEnter.mock.calls.length
    ).toEqual(1);
    expect(
      mockMouseEnter.mock.results[0].value.text
    ).toEqual("Sample Link");

    expect(wrapper.state().value.text).toEqual(
      "Sample Link"
    );
    expect(wrapper.state().hovered).toEqual(true);
    expect(linkbutton.children()).toHaveLength(2);

    wrapper.simulate("mouseleave");
    expect(wrapper.state().hovered).toEqual(
      false
    );
    expect(wrapper.state().value).toEqual(null);
    expect(
      wrapper.children().props().onMouseLeave
    ).toBeTruthy();
  });

  test("testing onMouseEnter and onMouseLeave without given prop", () => {
    wrapper.unmount();
    const newWrapper = mount(
      <Link passHref href="#deneme">
        <LinkButton
          text="Deneme Title"
          data-test="test"
          target="_blank"
        >
          <span>Sample Link</span>
        </LinkButton>
      </Link>
    );

    const newLinkbutton = newWrapper.find(
      '[data-test="test"]'
    );

    expect(
      newLinkbutton.get(1).props.target
    ).toEqual("_blank");

    expect(
      newLinkbutton.get(1).props.onMouseEnter
    ).toBeDefined();

    expect(
      newLinkbutton.get(1).props.onMouseLeave
    ).toBeDefined();

    newLinkbutton
      .find("a")
      .simulate("mouseenter");

    expect(
      newWrapper.children().state().hovered
    ).toEqual(true);

    newLinkbutton
      .find("a")
      .simulate("mouseleave");

    expect(
      newWrapper.children().state().hovered
    ).toEqual(false);
  });
});
