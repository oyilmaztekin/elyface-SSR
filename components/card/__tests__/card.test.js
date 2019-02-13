/* eslint-disable */
import React from "react";
import Enzyme, { shallow } from "enzyme";
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
    />
  </Card>
);

describe("Card Component Test", () => {
  const wrapper = shallow(comp);
  test("should rendered without crashing ", () => {
    wrapper;
  });
  test("should returns something ", () => {
    expect(wrapper).toBeTruthy();
  });
  test("testing card component props", () => {
    expect(wrapper.props().id).toBe("unique_id");
    expect(wrapper.props().className).toBe(
      "card"
    );
    expect(
      wrapper.props().style.backgroundColor
    ).toBe("#ffffff");
    expect(
      wrapper.props().children[0].props.className
    ).toBe("card-icon");
    expect(
      wrapper.props().children[0].props.iconTop
    ).toBe("24");
    expect(
      wrapper.props().children[0].props.size
    ).toBe("24");
  });
  test("testing Card.IMG props ", () => {
    const cardIMG = wrapper.props()
      .children[1][0];
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
    expect(divider).toEqual(
      <div
        className="card-divider"
        style={{ backgroundColor: "#ffa200" }}
      >
        {" "}
      </div>
    );
  });
  test("testing Card.Title props ", () => {
    const cardTitle = wrapper.props()
      .children[1][1];
    expect(cardTitle.props.color).toBe("#323232");
    expect(cardTitle.props.fontSize).toBe("18");
    expect(cardTitle.props.title).toBe(
      "Merkez Bankası'ndan Hükümete Açık Metkup"
    );
    expect(cardTitle.props.type).toBe(
      "cardTitle"
    );
  });

  test("testing gallery icon ", () => {
    const icon = wrapper
      .find(".card-icon")
      .getElement();
    const svg = wrapper.find("svg");
    // testing component name
    expect(icon.type.displayName).toBe("Image");
    expect(icon.props.className).toBe(
      "card-icon"
    );
    expect(icon.props.iconTop).toBe("24");
    expect(svg).not.toBeUndefined;
  });
});
