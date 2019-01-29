import "@globalstyle";
import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import "./assets/styles.scss";

class LinkButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const conditionalClass = classNames({
      "link-nav": this.props.type === "nav",
      "link-navBtn": this.props.type === "navBtn",
      "link-bread": this.props.type === "bread",
      "link-tag": this.props.type === "tag",
      "link-img": this.props.type === "img",
      "link-title":
        this.props.type === "cardTitle",
      "link-carouselBtn":
        this.props.type === "carouselBtn",
      "link-category-title":
        this.props.type === "catTitle",
      "link-footer-category":
        this.props.type === "footerCat",
      "link-footerList":
        this.props.type === "footerList"
    });
    return (
      <a
        type={this.props.type}
        alt={this.props.text}
        title={this.props.text}
        target={
          !this.props.target
            ? "_self"
            : this.props.target
        }
        href={this.props.href}
        className={conditionalClass}
      >
        {this.props.children}
      </a>
    );
  }
}

LinkButton.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  href: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  target: propTypes.string,
  children: propTypes.node
};

export default LinkButton;
