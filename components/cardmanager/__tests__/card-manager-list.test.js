/* eslint-disable */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardManager from "@comp/cardmanager/";
Enzyme.configure({ adapter: new Adapter() });

describe("Card Manager Component Testing", () => {
  let comp;
  let wrapper;
  let spy;
  beforeAll(async () => {
    comp = (
      <CardManager
        dataset="cat-gundem"
        limit={4}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#ffffff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        height={320}
        lineHeight="24"
      />
    );
    spy = jest.spyOn(
      CardManager.prototype,
      "sendRequest"
    );
    wrapper = mount(comp);
    await wrapper.instance().sendRequest();
  });

  afterAll(() => {
    spy.mockClear();
    wrapper.unmount();
  });

  test("should rendered without crashing ", () => {
    expect(wrapper).toBeDefined();
  });

  test("testing given props", () => {
    expect(wrapper.props().dataset).toBe(
      "cat-gundem"
    );
    expect(wrapper.props().limit).toBe(4);
    expect(wrapper.props().containerBG).toBe(
      "#ffffff"
    );
    expect(wrapper.props().cardBg).toBe(
      "#ffffff"
    );
    expect(wrapper.props().textColor).toBe(
      "#323232"
    );
    expect(wrapper.props().fontSize).toBe("18");
    expect(wrapper.props().gallery).toBe(false);
    expect(wrapper.props().border).toBe(
      "#ffa200"
    );
    expect(wrapper.props().width).toBe(400);
    expect(wrapper.props().height).toBe(320);
    expect(wrapper.props().lineHeight).toBe("24");
  });

  test("testing card registry after axios ", async () => {
    await wrapper.instance().componentDidMount();
    const state = wrapper.instance().state;
    const item =
      state.cardRegistry.data.data.items[0];
    expect(spy).toHaveBeenCalled();
    expect(state.cardRegistry.status).toBe(200);
    expect(state.cardRegistry.statusText).toBe(
      "OK"
    );
    expect(item.description).not.toBeUndefined();
  });

  test("testing cardlist ", async () => {
    const instance = wrapper
      .children()
      .instance();
    await wrapper.instance().componentDidMount();
    expect(instance.props.inherit).toBeDefined();
    expect(
      instance.props.inherit.sendRequest
    ).toBeDefined();
  });

  test("testing card and its children states the componentDidMount", async () => {
    await wrapper.instance().componentDidMount();
    expect(
      wrapper.state().cardRegistry
    ).toBeDefined();
    expect(
      wrapper.state().cardRegistry.status
    ).toBe(200);
    expect(
      wrapper.state().inherit.sendRequest
        ._isMockFunction
    ).toBe(true);
  });

  test("testing card and its children on the dom after componentDidMount", async () => {
    await wrapper.instance().componentDidMount();
    const cardManager = wrapper.render()[0]
      .children[0];
    expect(cardManager.attribs.class).toBe(
      "card-manager card-manager-horizontal"
    );
    const li = wrapper
      .render()
      .children()
      .children()[0];
    const itemID = wrapper.state().cardRegistry
      .data.data.items[0]._id;
    expect(li.attribs.class).toBe(
      "card-manager_item"
    );
    expect(li.attribs.style).toBe(
      "width: 400px;"
    );
    expect(li.attribs.id).toBe(`cardmanager-li-${itemID}`);

    wrapper.setProps({ gallery: true });

    const icon = wrapper.find(".card-icon");
    expect(icon.get(0).type.name).toBe("Icon");

    const divider = wrapper
      .find(".card-divider")
      .get(0);
    expect(
      divider.props.style.backgroundColor
    ).toBe(wrapper.props().border);

    const card = wrapper.find(".card").get(0)
      .props;
    expect(card.style.backgroundColor).toBe(
      wrapper.props().cardBg
    );
    expect(card.style.height).toBe(
      wrapper.props().height
    );
  });

  test("testing number of cardList according limit prop - componentDidMount", async () => {
    await wrapper.instance().componentDidMount();
    const cardManager = wrapper.render()[0]
      .children[0];
    expect(cardManager.children.length).toBe(4);
  });
});
