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
        alt={this.props.alt}
        title={this.props.title}
        responsive={this.props.responsive}
      />
    );
  }
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  title: propTypes.string,
  responsive: propTypes.bool
};

export default Image;
