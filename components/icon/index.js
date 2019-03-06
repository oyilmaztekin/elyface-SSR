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
          color: this.props.color
        }}
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </span>
    );
  }
}

Icon.propTypes = {
  icon: propTypes.object.isRequired,
  className: propTypes.string,
  color: propTypes.string
};

export default Icon;
