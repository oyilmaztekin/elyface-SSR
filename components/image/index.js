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
    let classN = classNames({
      responsive: this.props.responsive
    });
    return (
      <img
        alt={this.props.desc}
        className={classN}
        {...this.props}
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
