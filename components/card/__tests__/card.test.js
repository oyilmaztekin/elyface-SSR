/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "@comp/card/";
Enzyme.configure({ adapter: new Adapter() });

const comp = (
  <Card
    id="unique_id"
    bg="#ffffff"
    gallery={true}
    iconSize="24"
    iconTop="24"
    className="example_class"
    loading
  >
    <Card.IMG
      src="https://via.placeholder.com/200"
      longdesc="Enflasyon haberi"
      alt="Enflasyon haberi"
      className="card-img"
      border="#ffa200"
    />
    <Card.Title
      title="Merkez Bankası'ndan Hükümete Açık Metkup"
      color="#323232"
      fontSize="18"
      type="cardTitle"
      className="example-classname"
    />
  </Card>
);

describe("Card Component Test", () => {
  const wrapper = mount(comp);
  test("should rendered without crashing ", () => {
    wrapper;
  });
  test("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  test("testing card component props", () => {
    expect(wrapper.props().id).toBe("unique_id");
    expect(
      wrapper.children().props().className
    ).toBe(
      "card card-example_class card-loading"
    );

    expect(
      wrapper.children().props().style
        .backgroundColor
    ).toBe("#ffffff");
    expect(wrapper.props().gallery).toBe(true);
    expect(wrapper.props().iconTop).toBe("24");
    expect(wrapper.props().iconSize).toBe("24");
    expect(wrapper.props().children).toHaveLength(
      2
    );
  });
  test("testing Card.IMG props ", () => {
    const cardIMG = wrapper.props().children[0];
    expect(cardIMG).toEqual(
      <Card.IMG
        src="https://via.placeholder.com/200"
        longdesc="Enflasyon haberi"
        alt="Enflasyon haberi"
        className="card-img"
        border="#ffa200"
      />
    );

    expect(cardIMG.props.alt).toBe(
      "Enflasyon haberi"
    );
    expect(cardIMG.props.border).toBe("#ffa200");
    expect(cardIMG.props.className).toBe(
      "card-img"
    );
    expect(cardIMG.props.longdesc).toBe(
      "Enflasyon haberi"
    );
    expect(cardIMG.props.src).toBe(
      "https://via.placeholder.com/200"
    );
  });
  test("testing card divider", () => {
    const divider = wrapper.find(".card-divider");
    expect(divider).not.toBeUndefined();
    expect(divider.html()).toEqual(
      '<div class="card-divider" style="background-color: rgb(255, 162, 0);"> </div>'
    );
  });
  test("testing Card.Title props ", () => {
    const cardTitle = wrapper.props().children[1];
    expect(cardTitle.props.color).toBe("#323232");
    expect(cardTitle.props.fontSize).toBe("18");
    expect(cardTitle.props.title).toBe(
      "Merkez Bankası'ndan Hükümete Açık Metkup"
    );
    expect(cardTitle.props.type).toBe(
      "cardTitle"
    );
    expect(cardTitle.props.className).toEqual(
      "example-classname"
    );
  });

  test("testing gallery icon", () => {
    const icon = wrapper.children().props()
      .children[0];
    const svg = wrapper.find("svg");
    debugger;
    expect(icon.props.className).toBe(
      "card-icon"
    );
    expect(icon.props.iconTop).toBe("24");
    expect(icon.props.size).toBe("24");
    expect(typeof icon.props.icon).toEqual(
      "object"
    );
    expect(
      wrapper.closest(Image)
    ).not.toBeUndefined();
    expect(svg).not.toBeUndefined;
  });

  test("testing without gallery icon ", () => {
    wrapper.setProps({ gallery: false });
    expect(wrapper.props().gallery).toBe(false);
    wrapper.unmount();
  });
});
