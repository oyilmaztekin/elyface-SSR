/* eslint-disable */
import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
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
      src="http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
      longdesc="Enflasyon haberi"
      alt="Enflasyon haberi"
      className="card-img"
      border="#ffa200"
    />
    <Card.Title
      title="Merkez Bankası'ndan Hükümete Açık Metkup"
      color=""
      fontSize=""
      type="cardTitle"
    />
  </Card>
);

describe("Card Component Test", () => {
  it("should rendered without crashing ", () => {
    const wrapper = mount(comp);
  });
});
