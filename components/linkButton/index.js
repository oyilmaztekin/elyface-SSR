import "@globalstyle";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
import "./assets/styles.scss";

class LinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  @autobind
  onMouseEnter(e) {
    e.preventDefault();
    this.setState({
      hovered: true
    });
    this.props.onMouseEnter &&
      this.props.onMouseEnter(e);
  }

  @autobind
  onMouseLeave(e) {
    e.preventDefault();
    this.setState({
      hovered: false
    });
    this.props.onMouseLeave &&
      this.props.onMouseLeave(e);
  }

  render() {
    let {
      text,
      target,
      children,
      className,
      ...otherProps
    } = this.props;
    return (
      <a
        alt={text}
        title={text}
        target={!target ? "_self" : target}
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func
};

export default LinkButton;
