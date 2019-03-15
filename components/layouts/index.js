import React from "react";
import propTypes from "prop-types";

export const Element = props => {
  const { style, id, className } = props;
  return (
    <props.type
      style={style}
      id={id}
      className={className}
    >
      {props.children}
    </props.type>
  );
};

Element.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.object,
  type: propTypes.string.isRequired,
  id: propTypes.string,
  className: propTypes.string
};

export const Block = props => {
  const { style, id, className } = props;
  return (
    <props.type
      style={style}
      id={id}
      className={className}
    >
      {props.children}
    </props.type>
  );
};

Block.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.object,
  type: propTypes.string.isRequired,
  id: propTypes.string,
  className: propTypes.string,
};

