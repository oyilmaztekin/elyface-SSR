import React, { Component } from "react";
import propTypes from "prop-types";
import Link from "next/link";

class LinkWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return !this.props.noSSR ? (
      <Link
        href={this.props.href}
        prefetch={this.props.prefetch}
        isNav={this.props.isNav}
        isNavBtn={this.props.isNavBtn}
        isBread={this.props.isBread}
        isTag={this.props.isTag}
        isImg={this.props.isImg}
        isCarouselBtn={this.props.isCarouselBtn}
        isCarouselLeftBtn={this.props.isCarouselLeftBtn}
        isCategoryTitle={this.props.isCategoryTitle}
        isFooterCategory={this.props.isFooterCategory}
        isFooter={this.props.isFooter}
      >
        <a
          alt={this.props.text}
          title={this.props.text}
          target={this.props.target}
        >
          {this.props.text}
        </a>
      </Link>
    ) : (
      <a
        href={this.props.href}
        prefetch={this.props.prefetch}
        isNav={this.props.isNav}
        isNavBtn={this.props.isNavBtn}
        isBread={this.props.isBread}
        isTag={this.props.isTag}
        isImg={this.props.isImg}
        isCarouselBtn={this.props.isCarouselBtn}
        isCarouselLeftBtn={this.props.isCarouselLeftBtn}
        isCategoryTitle={this.props.isCategoryTitle}
        isFooterCategory={this.props.isFooterCategory}
        isFooter={this.props.isFooter}
        alt={this.props.text}
        title={this.props.text}
        target={this.props.target}
      >
        {this.props.text}
      </a>
    );
  }
}

LinkWrapper.propTypes = {
  noSSR: propTypes.bool,
  href: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  target: propTypes.string,
  prefetch: propTypes.bool,
  isNav: propTypes.bool,
  isNavBtn: propTypes.bool,
  isBread: propTypes.bool,
  isTag: propTypes.bool,
  isImg: propTypes.bool,
  isCarouselBtn: propTypes.bool,
  isCarouselLeftBtn: propTypes.bool,
  isCategoryTitle: propTypes.bool,
  isFooterCategory: propTypes.bool,
  isFooter: propTypes.bool
};

export default LinkWrapper;
