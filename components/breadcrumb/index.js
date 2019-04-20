import "./assets/styles.scss";
import React, { Component } from "react";
import { Block, Element } from "@comp/layouts";
import LinkButton from "@comp/linkButton";
import propTypes from "prop-types";

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  createCustomBreads(breads) {
    breads.map((item, ind) => {
      return (
        <Element type="li" className="items" key={ind}>
          <LinkButton text={item.title} href={item.url}>
            <Element type="span">
              {item.title}
            </Element>
          </LinkButton>
        </Element>
      )
    })
  }
  createBreads(cat, active) {
    return (
      <>
        <Element type="li">
          <LinkButton text="Anasayfa" href="/">
            <Element type="span">
              {"Anasayfa"}
            </Element>
          </LinkButton>
        </Element>
        <Element type="li">
          <LinkButton text={cat.title} href={cat.url}>
            <Element type="span">
              {cat.title}
            </Element>
          </LinkButton>
        </Element>
        <Element type="li">
          <LinkButton text={active.title} href={active.url}>
            <Element type="span">
              {active.title}
            </Element>
          </LinkButton>
        </Element>
      </>
    )
  }
  render() {
    const { breads, cat, active } = this.props;
    let items ;
    !!breads ? items = this.createCustomBreads(breads) : items = this.createBreads(cat, active);

    return (
      <Block type="ul" className="breadcrumb">
        {items}
      </Block>
    );
  }
}

Breadcrumb.propTypes = {
  breads: propTypes.array,
  cat: propTypes.object,
  active: propTypes.object
};

export default Breadcrumb;
