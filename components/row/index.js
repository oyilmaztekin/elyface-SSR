import React from "react";
import propTypes from "prop-types";

const Row = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: props.paddingTop + "px",
        paddingBottom: props.paddingBottom + "px"
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

Row.propTypes = {
  children: propTypes.node.isRequired,
  display: propTypes.string,
  justify: propTypes.string,
  paddingLeft: propTypes.number,
  paddingRight: propTypes.number,
  paddingTop: propTypes.number,
  paddingBottom: propTypes.number,
  className: propTypes.string
};

export default Row;
