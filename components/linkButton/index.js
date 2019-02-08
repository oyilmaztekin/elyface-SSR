import "@globalstyle";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
import classNames from "classnames";
import "./assets/styles.scss";

class LinkButton extends Component {
  constructor(props) {
    super(props);
  }
  @autobind
  onMouseEnter(e) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
      return;
    }
  }

  render() {
    const conditionalClass = classNames({
      "link-nav": this.props.type === "nav",
      "link-nav-btn":
        this.props.type === "navBtn",
      "link-bread": this.props.type === "bread",
      "link-tag": this.props.type === "tag",
      "link-title":
        this.props.type === "cardTitle",
      "link-carousel-btn":
        this.props.type === "carouselBtn",
      "link-category-title":
        this.props.type === "catTitle",
      "link-footer-category":
        this.props.type === "footerCat",
      "link-footer-list":
        this.props.type === "footerList"
    });
    let {
      type,
      text,
      target,
      children,
      ...otherProps
    } = this.props;
    return (
      <a
        type={type}
        alt={text}
        title={text}
        target={!target ? "_self" : target}
        className={conditionalClass}
        onMouseEnter={e => this.onMouseEnter(e)}
        {...otherProps}
      >
        {children}
      </a>
    );
  }
}

LinkButton.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  target: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  onMouseEnter: propTypes.func
};

export default LinkButton;
