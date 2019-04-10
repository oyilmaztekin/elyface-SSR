import "../assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import { Block, Element } from "@comp/layouts/";
import LinkButton from "@comp/linkButton";

const ClickableTag = props => {
  return (
    <Block type="section" id="article_category">
      <LinkButton text={props.cat} href={props.catUrl}>
        <Element type="span">{props.cat}</Element>
      </LinkButton>
    </Block>
  );
};

ClickableTag.propTypes = {
    cat:propTypes.string.isRequired,
    catUrl:propTypes.string.isRequired
}

export default ClickableTag;
