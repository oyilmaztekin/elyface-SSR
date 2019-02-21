/* eslint-disable */
import React from "react";
import autobind from "autobind-decorator";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchForm from "@comp/searchform/";
Enzyme.configure({ adapter: new Adapter() });

class Wrapper extends React.Component {
  @autobind
  _handleSubmit(e) {
    return e;
  }
  render() {
    return (
      <SearchForm
        id="unique_id"
        name="unique_name"
        value="Ara"
        type="search"
        submitText="🔎"
        onClick={this._handleSubmit}
        className="search-form-input"
      />
    );
  }
}

describe("SearchForm Component Testing", () => {
  let wrapper;
  let buttonReactWrapper;
  beforeAll(() => {
    wrapper = mount(<Wrapper />);
    buttonReactWrapper = wrapper
      .find("button")
      .children();
  });
  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });

  test("testing searchform props ", () => {
    expect(
      wrapper.children().get(0).props.className
    ).toBe("search-form-input");
    expect(
      wrapper.children().get(0).props.id
    ).toBe("unique_id");
    expect(
      wrapper.children().get(0).props.name
    ).toBe("unique_name");
    expect(
      wrapper.children().get(0).props.submitText
    ).toBe("🔎");
    expect(
      wrapper.children().get(0).props.type
    ).toBe("search");
    expect(
      wrapper.children().get(0).props.value
    ).toBe("Ara");
  });

  test("testing submit button", () => {
    const button = wrapper.render()[0]
      .children[1];
    expect(button.attribs.class).toBe(
      "search-form-submit"
    );
    expect(button.attribs.type).toBe("submit");
    expect(
      buttonReactWrapper.get(0).props.size
    ).toBe("16");
    expect(
      buttonReactWrapper.get(0).props.icon.prefix
    ).toBe("fas");
  });

  test("testing button click ", () => {
    const clickEvent = wrapper
      .find("button")
      .simulate("click");
    expect(typeof clickEvent).toBe("object");
  });
});

describe("testing SearchForm without props.onClick", () => {
  let wrapper;
  let buttonReactWrapper;
  let mockCallBack = jest.fn();
  let mockCallBackClick = jest.fn();
  beforeAll(() => {
    wrapper = mount(
      <SearchForm
        id="unique_id"
        name="unique_name"
        value="Ara"
        type="search"
        submitText="🔎"
        className="search-form-input"
        onClick={mockCallBackClick}
      />
    );
    buttonReactWrapper = wrapper
      .find("button")
      .children();
  });
  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });

  test("testing state", () => {
    expect(wrapper.state().value).toBe("Ara");
  });
  test("testing onchange, onClick and State Changes ", () => {
    wrapper.find("button").simulate("click");

    expect(
      mockCallBackClick.mock.calls.length
    ).toEqual(1);

    wrapper.setProps({
      value: "submitted value"
    });

    wrapper.find("button").simulate("submit", {
      target: {
        value: wrapper.children().get(0).props
          .name
      }
    });

    expect(wrapper.state().value).toBe(
      wrapper.children().get(0).props.name
    );

    wrapper.setProps({
      value: "input changed value"
    });

    wrapper.find("input").simulate("change", {
      target: {
        value: wrapper.children().get(0).props
          .name
      }
    });

    expect(wrapper.state().value).toBe(
      wrapper.children().get(0).props.name
    );
  });
});
