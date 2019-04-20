import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";

class Icon extends Component {
  static displayName = "Icon";
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const iconEl = this.iconElement;

    const svg = iconEl.querySelector("svg");
    let sizeOf = this.calculateSize(
      this.props.width,
      this.props.height
    );
    
    if (svg && svg.style) {
      svg.style.width = sizeOf;
      svg.style.height = sizeOf;
    }

    if (this.props.color) {
      svg.style.fill = this.props.color;
      svg.style.stroke = this.props.color;
    }
  }

  @autobind
  calculateSize(width, height) {
    const size = width || height;
    return size ? `${size / 16}rem` : "1em";
  }

  render() {
    const { icon, className } = this.props;
    // eslint-disable-next-line
    const svg = require(`!raw-loader!./assets/icons/${icon}.svg`);

    return (
      <span
        {...this.props}
        id={icon}
        ref={el => (this.iconElement = el)}
        className={className}
        dangerouslySetInnerHTML={{
          __html: svg.default
        }}
      />
    );
  }
}

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  width: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  height: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  className: propTypes.string,
  color: propTypes.string
};

export default Icon;
