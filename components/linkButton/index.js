import "@globalstyle";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
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
    let {
      type,
      text,
      target,
      children,
      className,
      ...otherProps
    } = this.props;
    return (
      <a
        type={type}
        alt={text}
        title={text}
        target={!target ? "_self" : target}
        className={className}
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
