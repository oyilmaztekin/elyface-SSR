/* eslint-disable */
import React from "react";
import autobind from "autobind-decorator";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchForm from "@comp/searchform/";
Enzyme.configure({ adapter: new Adapter() });

`"<form class="search-form"><input class="search-form-input" id="unique_id" name="unique_name" type="search" submittext="🔎" value="Ara"><button type="submit" class="search-form-submit"><span style="font-size: 16px;"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></span></button></form>"`;

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
