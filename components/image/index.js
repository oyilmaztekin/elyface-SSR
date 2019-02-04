import "@globalstyle";
import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";

class Image extends Component {
  static displayName = "Image";
  constructor(props) {
    super(props);
  }
  render() {
    let { responsive } = this.props;
    let classN = classNames(
      responsive && "responsive"
    );
    return (
      <img
        src={this.props.src}
        alt={this.props.desc}
        longdesc={this.props.longdesc}
        width={this.props.width}
        height={this.props.height}
        responsive={responsive}
        srcSet={this.props.srcSet}
        sizes={this.props.sizes}
        className={classN}
      />
    );
  }
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  responsive: propTypes.bool,
  height: propTypes.string,
  width: propTypes.string,
  longdesc: propTypes.string,
  desc: propTypes.string,
  srcSet: propTypes.string,
  sizes: propTypes.string
};

export default Image;
