import "@globalstyle";
import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.desc}
        title={this.props.desc}
        longdesc={this.props.longdesc}
        width={this.props.width}
        height={this.props.height}
        responsive={this.props.responsive}
        srcSet={this.props.srcSet}
        sizes={this.props.sizes}
      />
    );
  }
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  responsive: propTypes.bool,
  height: propTypes.string,
  width: propTypes.string,
  longdesc: propTypes.string,
  srcSet: propTypes.string,
  sizes: propTypes.string
};

export default Image;
