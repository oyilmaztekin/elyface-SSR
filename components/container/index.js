import React from "react";
import propTypes from "prop-types";

const Container = props => {
  let perc;
  props.percentage ? (perc = "%") : (perc = "px");
  return (
    <div
      style={{
        margin: props.margin,
        width: props.width + perc,
        display: props.display,
        backgroundColor: props.bg
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: propTypes.node.isRequired,
  width: propTypes.number,
  percentage: propTypes.bool,
  display: propTypes.string,
  className: propTypes.string,
  margin: propTypes.string,
  bg: propTypes.string
};

Container.defaultProps = {
  display: "block",
  margin: "0 auto"
};

export default Container;
