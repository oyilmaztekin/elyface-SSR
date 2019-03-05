import React from "react";
import propTypes from "prop-types";

const Container = props => {
  return (
    <div
      style={{
        width: props.width + "px",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 40 + "px"
      }}
    >
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: propTypes.node.isRequired,
  width: propTypes.string,
  percentace: propTypes.bool
};

export default Container;
