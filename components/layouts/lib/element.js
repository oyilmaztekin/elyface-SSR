import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";

export class Element extends Component {
  constructor(props) {
    super(props);
  }
  @autobind
  _handleMouseEnter(e) {
    e.preventDefault();
    this.props.onMouseEnter &&
      this.props.onMouseEnter(e);
  }
  render() {
    const {
      style,
      id,
      className,
      children
    } = this.props;
    return (
      <this.props.type
        style={style}
        id={id}
        className={className}
        onMouseEnter={this._handleMouseEnter}
      >
        {children}
      </this.props.type>
    );
  }
}

Element.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.object,
  type: propTypes.string.isRequired,
  id: propTypes.string,
  className: propTypes.string,
  onMouseEnter: propTypes.func
};
