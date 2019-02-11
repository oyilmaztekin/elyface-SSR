import "@globalstyle";
import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Icon extends Component {
  static displayName = "Image";
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span
        className={this.props.className}
        style={{
          fontSize: this.props.size + "px",
          paddingTop: this.props.iconTop + "px"
        }}
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </span>
    );
  }
}

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  size: propTypes.string,
  className: propTypes.string,
  iconTop: propTypes.string
};

export default Icon;
